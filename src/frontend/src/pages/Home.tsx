import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    text: "The Rose & Aloe Face Cream has completely transformed my skin! It's so soft and glowing now. Pure herbal magic! 🌹",
    product: "Rose & Aloe Vera Face Cream",
  },
  {
    id: 2,
    name: "Kavitha Reddy",
    avatar: "KR",
    rating: 5,
    text: "Been using the Neem Face Wash for 2 months and my acne is almost gone. Best natural product I've tried!",
    product: "Neem Purifying Face Wash",
  },
  {
    id: 3,
    name: "Meera Nair",
    avatar: "MN",
    rating: 5,
    text: "Hibiscus Hair Oil is a game changer. My hair has grown so much and the fall has stopped completely. Highly recommend!",
    product: "Hibiscus Hair Growth Oil",
  },
];

const STARS = [1, 2, 3, 4, 5];

const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
const summerProducts = products.filter((p) => p.isSummerSpecial).slice(0, 3);

export default function Home() {
  return (
    <main className="page-content">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Pure Herbal
            </span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Nira Herbals
          </h1>
        </div>
        <Link to="/cart" className="relative">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-lg">🛍️</span>
          </div>
        </Link>
      </header>

      {/* Hero Banner */}
      <section className="mx-4 rounded-3xl overflow-hidden relative shadow-card">
        <img
          src="/assets/generated/hero-banner.dim_800x600.jpg"
          alt="Nira Herbals - Pure Herbal Care"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent flex flex-col justify-end p-6">
          <Badge className="mb-2 w-fit bg-accent/90 text-accent-foreground text-[10px] font-semibold">
            ✨ 100% Natural & Herbal
          </Badge>
          <h2 className="font-display text-2xl font-bold text-white leading-tight mb-2">
            Pure Herbal Care
            <br />
            for Natural Beauty
          </h2>
          <p className="text-white/80 text-xs mb-4 font-body">
            Chemical-free skincare crafted with love
          </p>
          <Link to="/shop">
            <Button
              size="sm"
              className="bg-white text-primary hover:bg-white/90 rounded-xl font-semibold text-xs h-9 px-4"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Quick Access */}
      <section className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-2">
          {[
            { emoji: "🌸", label: "Face", path: "/shop" },
            { emoji: "💆", label: "Hair", path: "/shop" },
            { emoji: "🧴", label: "Body", path: "/shop" },
            { emoji: "🧼", label: "Soaps", path: "/shop" },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={cat.path as "/shop"}
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-card hover:bg-secondary transition-colors shadow-card"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-[11px] font-semibold text-foreground">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-xs text-muted-foreground">
              Bestsellers loved by thousands
            </p>
          </div>
          <Link to="/shop">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary text-xs h-8 px-3 rounded-xl"
            >
              View All <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Summer Picks */}
      <section className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-accent" />
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Summer Picks ☀️
            </h2>
            <p className="text-xs text-muted-foreground">
              Beat the heat with herbal care
            </p>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {summerProducts.map((product) => (
            <Link
              key={product.id}
              to="/product/$id"
              params={{ id: String(product.id) }}
              className="flex-shrink-0 w-44 bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5">
                <p className="text-xs font-semibold text-foreground line-clamp-2 leading-tight mb-1">
                  {product.name}
                </p>
                <span className="text-sm font-bold text-primary">
                  ₹{product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-6 px-4">
        <h2 className="font-display text-xl font-bold text-foreground mb-1">
          What Our Customers Say
        </h2>
        <p className="text-xs text-muted-foreground mb-3">
          Real results, real people
        </p>
        <div className="space-y-3">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <div className="flex">
                    {STARS.slice(0, t.rating).map((n) => (
                      <Star
                        key={n}
                        className="w-3 h-3 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {t.text}
              </p>
              <p className="text-[10px] text-muted-foreground mt-2 font-medium">
                {t.product}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 px-4 pb-4 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="font-display text-base font-semibold text-foreground">
            Nira Herbals
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()}. Built with{" "}
          <span className="text-red-400">❤️</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
