import { Link } from "@tanstack/react-router";
import { ArrowLeft, Heart, Leaf, Shield, Star } from "lucide-react";

const values = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "100% Natural",
    desc: "Every ingredient is plant-derived, sustainably sourced, and free from harmful chemicals.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "No Harmful Chemicals",
    desc: "No parabens, sulfates, silicones, or synthetic fragrances. Pure as nature intended.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Made with Love",
    desc: "Small-batch crafted with attention to quality and efficacy in every formulation.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Ayurvedic Wisdom",
    desc: "Rooted in 5000+ years of Ayurvedic tradition, validated by modern botanical science.",
  },
];

export default function About() {
  return (
    <main className="page-content">
      <header className="px-4 pt-12 pb-4">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="font-display text-2xl font-bold text-foreground">
          About Nira Herbals
        </h1>
      </header>

      <div className="mx-4 rounded-3xl bg-primary p-6 mb-5 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-primary-foreground/70 text-xs uppercase tracking-widest font-semibold mb-2">
            Our Mission
          </p>
          <h2 className="font-display text-2xl font-bold text-primary-foreground leading-tight mb-3">
            Natural & Chemical-Free Skincare for Everyone
          </h2>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            We believe everyone deserves access to pure, effective skincare —
            without compromising on ingredients or the planet.
          </p>
        </div>
        <div className="absolute -right-6 -bottom-6 text-8xl opacity-10">
          🌿
        </div>
      </div>

      <div className="px-4 mb-5">
        <h2 className="font-display text-xl font-bold text-foreground mb-3">
          Our Story
        </h2>
        <div className="bg-card rounded-2xl p-4 shadow-card space-y-3">
          <p className="text-sm text-foreground/75 leading-relaxed">
            Nira Herbals was born from a simple belief: the best skincare
            ingredients have been growing in our gardens and forests for
            thousands of years. Our founder grew up watching her grandmother
            prepare herbal concoctions for skin and hair — a tradition passed
            down through generations.
          </p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Frustrated by synthetic-heavy products dominating the market, she
            decided to bring authentic herbal care to the modern consumer. Every
            Nira product is a tribute to that ancestral wisdom, formulated with
            precision and purity.
          </p>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Today, Nira Herbals serves thousands of happy customers across
            India, helping them reconnect with nature through their daily
            skincare rituals.
          </p>
        </div>
      </div>

      <div className="px-4 mb-5">
        <h2 className="font-display text-xl font-bold text-foreground mb-3">
          Our Values
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-3.5 shadow-card"
            >
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-primary mb-2.5">
                {v.icon}
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {v.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 bg-secondary rounded-2xl p-4 mb-5">
        <h3 className="font-display text-base font-semibold text-foreground mb-3 text-center">
          Nira By Numbers
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: "10,000+", label: "Happy Customers" },
            { num: "25+", label: "Products" },
            { num: "100%", label: "Natural" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-xl font-bold text-primary">
                {stat.num}
              </p>
              <p className="text-[10px] text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="px-4 pb-4 text-center">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
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
