import { useCart } from "@/context/CartContext";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Home,
  Info,
  Leaf,
  MoreHorizontal,
  Phone,
  ShoppingBag,
  Tag,
} from "lucide-react";
import { useState } from "react";

export default function BottomNav() {
  const { cartCount } = useCart();
  const [moreOpen, setMoreOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {moreOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          className="fixed inset-0 z-40"
          onClick={() => setMoreOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMoreOpen(false)}
        />
      )}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-card border-t border-border">
        <div className="flex items-center justify-around px-2 py-2">
          <Link
            to="/"
            data-ocid="nav.home.link"
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
              isActive("/")
                ? "text-primary bg-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>

          <Link
            to="/shop"
            data-ocid="nav.shop.link"
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors relative ${
              isActive("/shop")
                ? "text-primary bg-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">Shop</span>
          </Link>

          <Link
            to="/offers"
            data-ocid="nav.offers.link"
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
              isActive("/offers")
                ? "text-primary bg-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Tag className="w-5 h-5" />
            <span className="text-[10px] font-medium">Offers</span>
          </Link>

          <Link
            to="/skin-guide"
            data-ocid="nav.guide.link"
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
              isActive("/skin-guide")
                ? "text-primary bg-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-[10px] font-medium">Guide</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              data-ocid="nav.more.link"
              onClick={() => setMoreOpen((o) => !o)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                moreOpen
                  ? "text-primary bg-secondary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-[10px] font-medium">More</span>
            </button>

            {moreOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-2xl shadow-card-hover overflow-hidden min-w-[160px] z-50 animate-scale-in">
                <Link
                  to="/knowledge"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <Leaf className="w-4 h-4 text-primary" />
                  Herbal Knowledge
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <Info className="w-4 h-4 text-primary" />
                  About Nira
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
