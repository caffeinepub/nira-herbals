import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { Leaf, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 1 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price}`,
      icon: <Leaf className="w-4 h-4 text-primary" />,
    });
  };

  return (
    <Link
      to="/product/$id"
      params={{ id: String(product.id) }}
      data-ocid={`shop.item.${index}`}
      className="block group"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.isSummerSpecial && (
            <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-semibold">
              ☀️ Summer
            </Badge>
          )}
          {product.isFeatured && !product.isSummerSpecial && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-semibold">
              ✨ Featured
            </Badge>
          )}
        </div>
        <div className="p-3">
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-sm font-semibold text-foreground leading-tight mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-primary">
              ₹{product.price}
            </span>
            <Button
              size="sm"
              data-ocid="product.add_button"
              onClick={handleAdd}
              className="h-8 px-3 text-xs rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ShoppingCart className="w-3.5 h-3.5 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
