import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Leaf,
  ShoppingCart,
} from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams({ strict: false }) as { id: string };
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, cartItems } = useCart();

  if (!product) {
    return (
      <main className="page-content flex flex-col items-center justify-center min-h-screen px-4">
        <span className="text-5xl mb-4">🌿</span>
        <h2 className="font-display text-xl font-bold text-foreground mb-2">
          Product not found
        </h2>
        <Link to="/shop">
          <Button className="rounded-xl bg-primary text-primary-foreground">
            Back to Shop
          </Button>
        </Link>
      </main>
    );
  }

  const cartItem = cartItems.find((item) => item.product.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price}`,
    });
  };

  return (
    <main className="page-content">
      {/* Back button */}
      <div className="px-4 pt-12 pb-2">
        <Link
          to="/shop"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isSummerSpecial && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              ☀️ Summer Special
            </Badge>
          )}
          {product.isFeatured && (
            <Badge className="bg-primary text-primary-foreground font-semibold">
              ✨ Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 pt-5">
        <Badge variant="secondary" className="mb-2 text-xs font-medium">
          {product.category}
        </Badge>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1 leading-tight">
          {product.name}
        </h1>
        <p className="text-2xl font-bold text-primary mb-3">₹{product.price}</p>
        <p className="text-sm text-foreground/70 leading-relaxed mb-5">
          {product.description}
        </p>

        {/* Benefits */}
        <div className="mb-5">
          <h3 className="font-display text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Key Benefits
          </h3>
          <ul className="space-y-2">
            {product.benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <Leaf className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="font-display text-base font-semibold text-foreground mb-2 flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-primary" />
            Ingredients
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span
                key={ing}
                className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-medium"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add to Cart Fixed Bottom */}
      <div className="sticky bottom-16 px-4 pb-4 bg-background pt-3 border-t border-border">
        <Button
          data-ocid="product.add_button"
          onClick={handleAdd}
          disabled={!product.inStock}
          className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {cartItem
            ? `Add Again (${cartItem.quantity} in cart)`
            : "Add to Cart"}
        </Button>
        {!product.inStock && (
          <p className="text-center text-xs text-muted-foreground mt-2">
            Currently out of stock
          </p>
        )}
      </div>
    </main>
  );
}
