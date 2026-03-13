import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;
    const lines = cartItems
      .map(
        (item) =>
          `- ${item.product.name} x${item.quantity} - ₹${item.product.price * item.quantity}`,
      )
      .join("%0A");
    const message = `Hi Nira Herbals! I'd like to order:%0A${lines}%0ATotal: ₹${cartTotal}`;
    window.open(`https://wa.me/919987952276?text=${message}`, "_blank");
  };

  return (
    <main className="page-content">
      <header className="px-4 pt-12 pb-4 flex items-center gap-3">
        <Link to="/shop">
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
        </Link>
        <h1 className="font-display text-2xl font-bold text-foreground">
          My Cart
        </h1>
        {cartItems.length > 0 && (
          <span className="ml-auto text-xs text-muted-foreground font-medium">
            {cartItems.reduce((s, i) => s + i.quantity, 0)} items
          </span>
        )}
      </header>

      {cartItems.length === 0 ? (
        <div
          data-ocid="cart.empty_state"
          className="flex flex-col items-center py-20 px-4 text-center"
        >
          <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Add some herbal goodness to get started!
          </p>
          <Link to="/shop">
            <Button className="bg-primary text-primary-foreground rounded-xl px-6">
              Browse Products
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="px-4 space-y-3">
            {cartItems.map((item, i) => (
              <div
                key={item.product.id}
                data-ocid={`cart.item.${i + 1}`}
                className="bg-card rounded-2xl p-3 shadow-card flex items-center gap-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.product.category}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    ₹{item.product.price * item.quantity}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    data-ocid={`cart.delete_button.${i + 1}`}
                    className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-destructive" />
                  </button>
                  <div className="flex items-center gap-1.5 bg-secondary rounded-full px-1.5 py-1">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-6 h-6 rounded-full bg-card flex items-center justify-center shadow-xs hover:bg-border transition-colors"
                    >
                      <Minus className="w-3 h-3 text-foreground" />
                    </button>
                    <span className="text-xs font-bold text-foreground w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-6 h-6 rounded-full bg-card flex items-center justify-center shadow-xs hover:bg-border transition-colors"
                    >
                      <Plus className="w-3 h-3 text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-4 mt-4 bg-secondary rounded-2xl p-4">
            <h3 className="font-semibold text-sm text-foreground mb-3">
              Order Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-medium">
                  ₹{cartTotal}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-primary font-semibold">Free 🎉</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold text-sm text-foreground">Total</span>
                <span className="font-bold text-base text-primary">
                  ₹{cartTotal}
                </span>
              </div>
            </div>
          </div>

          <div className="px-4 mt-4">
            <Button
              data-ocid="cart.checkout.button"
              onClick={handleWhatsAppOrder}
              className="w-full h-12 rounded-2xl font-bold text-base flex items-center gap-2"
              style={{ backgroundColor: "#25d366", color: "white" }}
            >
              <SiWhatsapp className="w-5 h-5" />
              Order via WhatsApp
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-2">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </div>
        </>
      )}
    </main>
  );
}
