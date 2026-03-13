import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type Product = {
    id : Nat;
    name : Text;
    price : Nat;
    description : Text;
    stock : Nat;
  };

  public type Order = {
    id : Nat;
    productId : Nat;
    quantity : Nat;
    buyer : Principal;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let products = Map.empty<Nat, Product>();
  var nextProductId = 1;

  let orders = Map.empty<Nat, Order>();
  var nextOrderId = 1;

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can fetch their profile");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    switch (AccessControl.getUserRole(accessControlState, caller)) {
      case (#admin) { userProfiles.get(user) };
      case (#user) {
        if (caller == user) {
          userProfiles.get(user);
        } else {
          Runtime.trap("Unauthorized: Users can only fetch their own profile");
        };
      };
      case (#guest) { Runtime.trap("Unauthorized: Guests cannot fetch profiles") };
    };
  };

  public shared ({ caller }) func createProduct(name : Text, price : Nat, description : Text, stock : Nat) : async Nat {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can create products");
    };

    let productId = nextProductId;
    nextProductId += 1;

    let product : Product = {
      id = productId;
      name;
      price;
      description;
      stock;
    };
    products.add(productId, product);
    productId;
  };

  public shared ({ caller }) func placeOrder(productId : Nat, quantity : Nat) : async Nat {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can place orders");
    };
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        if (product.stock < quantity) {
          Runtime.trap("Not enough stock");
        };
        let orderId = nextOrderId;
        nextOrderId += 1;

        let order : Order = {
          id = orderId;
          productId;
          quantity;
          buyer = caller;
        };
        orders.add(orderId, order);
        orderId;
      };
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func searchProducts(searchTerm : Text) : async [Product] {
    let filtered = products.values().toArray().filter(
      func(product) { product.name.contains(#text searchTerm) }
    );
    filtered.sort();
  };

  public query ({ caller }) func getMyOrders() : async [Order] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view orders");
    };
    let myOrders = orders.values().toArray().filter(
      func(order) { order.buyer == caller }
    );
    myOrders;
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can view all orders ");
    };
    orders.values().toArray();
  };

  public shared ({ caller }) func deleteOrder(orderId : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admin can delete orders");
    };
    if (not orders.containsKey(orderId)) {
      Runtime.trap("Invalid order_id");
    };
    orders.remove(orderId);
  };
};
