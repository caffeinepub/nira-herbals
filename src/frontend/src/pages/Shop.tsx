import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { categories, products } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { cartCount } = useCart();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.ingredients.some((i) =>
          i.toLowerCase().includes(search.toLowerCase()),
        );
      return matchesCat && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="page-content">
      {/* Header */}
      <header className="px-4 pt-12 pb-4 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Shop
        </h1>
        <Link to="/cart" className="relative">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </header>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-ocid="shop.search_input"
            placeholder="Search products, ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 rounded-xl bg-card border-border h-11 text-sm"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-4 overflow-x-auto">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-ocid="shop.category.tab"
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="px-4 mb-3">
        <p className="text-xs text-muted-foreground">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div
          data-ocid="shop.empty_state"
          className="flex flex-col items-center py-16 px-4 text-center"
        >
          <span className="text-4xl mb-3">🌿</span>
          <p className="font-display text-lg font-semibold text-foreground mb-1">
            No products found
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different search or category
          </p>
        </div>
      ) : (
        <div className="px-4 grid grid-cols-2 gap-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      )}
    </main>
  );
}
