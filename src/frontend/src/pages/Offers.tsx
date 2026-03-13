import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Percent, Tag } from "lucide-react";

const summerCombo = products.find((p) => p.id === 9)!;

export default function Offers() {
  return (
    <main className="page-content">
      <header className="px-4 pt-12 pb-4">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Offers & Combos
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Exclusive deals on herbal goodness
        </p>
      </header>

      {/* Summer Combo Hero */}
      <div className="mx-4 rounded-3xl overflow-hidden shadow-card-hover relative mb-5">
        <img
          src="/assets/generated/product-summer-combo.dim_600x600.jpg"
          alt="Summer Skincare Combo"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
          <Badge className="mb-2 w-fit bg-accent text-accent-foreground font-bold text-xs">
            ☀️ SUMMER SPECIAL
          </Badge>
          <h2 className="font-display text-xl font-bold text-white mb-1">
            Summer Hydration Kit
          </h2>
          <p className="text-white/80 text-xs mb-3">
            Complete summer skincare routine in one box
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white text-xl font-bold">₹899</span>
            <span className="text-white/60 text-sm line-through">₹1,299</span>
            <Badge className="bg-red-500 text-white text-xs font-bold">
              31% OFF
            </Badge>
          </div>
          <Link
            to="/product/$id"
            params={{ id: String(summerCombo.id) }}
            className="mt-3 w-fit"
          >
            <Button className="bg-white text-foreground hover:bg-white/90 rounded-xl text-xs h-9 font-semibold">
              Get This Deal <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Limited Offers Banner */}
      <div className="mx-4 bg-primary rounded-2xl p-4 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-primary-foreground" />
          <span className="text-primary-foreground text-xs font-bold uppercase tracking-wider">
            Limited Time Offer
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">
          First Order Discount 🎉
        </h3>
        <p className="text-primary-foreground/80 text-xs mb-3">
          Get 15% off on your first order. Use code NIRA15 at checkout.
        </p>
        <div className="bg-white/20 rounded-xl px-4 py-2 inline-block">
          <span className="text-primary-foreground font-bold tracking-widest text-sm">
            NIRA15
          </span>
        </div>
      </div>

      {/* Offer Cards */}
      <div className="px-4 space-y-3">
        <h2 className="font-display text-lg font-bold text-foreground">
          Current Deals
        </h2>

        {[
          {
            icon: <Tag className="w-5 h-5 text-primary" />,
            title: "Buy 2 Get 1 Free",
            desc: "On all Face Care products. Mix and match!",
            badge: "B2G1",
          },
          {
            icon: <Percent className="w-5 h-5 text-accent-foreground" />,
            title: "Summer Sale — 20% Off",
            desc: "On all Summer Special products. Limited stock!",
            badge: "20% OFF",
          },
          {
            icon: <Tag className="w-5 h-5 text-primary" />,
            title: "Hair Care Bundle",
            desc: "Buy Hair Oil + Hair Mask and save ₹100.",
            badge: "SAVE ₹100",
          },
        ].map((offer) => (
          <div
            key={offer.title}
            className="bg-card rounded-2xl p-4 shadow-card flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              {offer.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-sm text-foreground">
                  {offer.title}
                </h3>
                <Badge className="bg-primary/10 text-primary font-bold text-[10px] flex-shrink-0">
                  {offer.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{offer.desc}</p>
              <Link
                to="/shop"
                className="text-xs text-primary font-semibold mt-2 hover:underline inline-block"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp for orders */}
      <div className="mx-4 mt-5 bg-secondary rounded-2xl p-4 flex items-center gap-3">
        <span className="text-3xl">💬</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">
            Exclusive WhatsApp Deals
          </p>
          <p className="text-xs text-muted-foreground">
            Message us for bulk order discounts!
          </p>
        </div>
        <a
          href="https://wa.me/919987952276"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground rounded-xl text-xs h-8"
          >
            Chat
          </Button>
        </a>
      </div>
    </main>
  );
}
