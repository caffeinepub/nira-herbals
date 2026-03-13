import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const ingredients = [
  {
    name: "Aloe Vera",
    emoji: "🌵",
    color: "from-green-50 to-green-100",
    tagColor: "bg-green-100 text-green-800",
    tagline: "The Healing Wonder Plant",
    description:
      "Aloe vera contains over 75 bioactive compounds including vitamins, minerals, and amino acids. Its cooling gel is nature's perfect moisturizer.",
    benefits: [
      "Intense hydration without greasiness",
      "Soothes sunburn and inflammation",
      "Accelerates wound healing",
      "Natural antimicrobial properties",
      "Stimulates collagen production",
    ],
    usedIn: "Face creams, soothing gels, serums, and toners",
  },
  {
    name: "Neem",
    emoji: "🍃",
    color: "from-emerald-50 to-emerald-100",
    tagColor: "bg-emerald-100 text-emerald-800",
    tagline: "Nature's Pharmacist",
    description:
      "Used in Ayurveda for over 4000 years, neem contains nimbidin and azadirachtin — powerful compounds with antibacterial and antifungal properties.",
    benefits: [
      "Fights acne-causing bacteria",
      "Controls excess oil production",
      "Reduces dark spots & blemishes",
      "Anti-aging antioxidants",
      "Strengthens skin barrier",
    ],
    usedIn: "Face washes, toners, spot treatments, and serums",
  },
  {
    name: "Rose",
    emoji: "🌹",
    color: "from-rose-50 to-rose-100",
    tagColor: "bg-rose-100 text-rose-800",
    tagline: "Queen of Botanicals",
    description:
      "Rose contains phenylethanol, geraniol, and over 300 aromatic compounds. Rose water has been used in skincare since ancient Persia.",
    benefits: [
      "Balances skin's natural pH",
      "Reduces redness and irritation",
      "Natural anti-aging properties",
      "Brightens dull complexion",
      "Gentle astringent effect",
    ],
    usedIn: "Face creams, toners, soaps, and face mists",
  },
  {
    name: "Turmeric",
    emoji: "🌿",
    color: "from-yellow-50 to-amber-100",
    tagColor: "bg-amber-100 text-amber-800",
    tagline: "Golden Spice of Ayurveda",
    description:
      "Curcumin, turmeric's active compound, is one of the most studied botanical ingredients. It's a potent antioxidant and anti-inflammatory agent.",
    benefits: [
      "Powerful anti-inflammatory action",
      "Brightens and evens skin tone",
      "Fades hyperpigmentation",
      "Fights free radical damage",
      "Natural antibacterial properties",
    ],
    usedIn: "Face scrubs, soaps, face masks, and serums",
  },
];

export default function Knowledge() {
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
          Herbal Knowledge
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          The science behind nature's skincare
        </p>
      </header>

      <div className="mx-4 mb-5 bg-primary/10 rounded-2xl p-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          At Nira Herbals, every formula is rooted in Ayurvedic wisdom and
          modern science. We use only the purest herbal extracts — no synthetic
          chemicals, no parabens, no compromises.
        </p>
      </div>

      <div className="px-4 space-y-4">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className={`rounded-3xl bg-gradient-to-br ${ing.color} p-4`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-4xl">{ing.emoji}</span>
              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${ing.tagColor}`}
                >
                  {ing.tagline}
                </span>
                <h2 className="font-display text-xl font-bold text-foreground mt-1">
                  {ing.name}
                </h2>
              </div>
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              {ing.description}
            </p>

            <div className="mb-3">
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-2">
                Benefits
              </p>
              <ul className="space-y-1.5">
                {ing.benefits.map((b) => (
                  <li
                    key={b}
                    className="text-xs text-foreground/75 flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 rounded-xl p-2.5">
              <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-1">
                Used in
              </p>
              <p className="text-xs text-foreground/70">{ing.usedIn}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
