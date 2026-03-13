import { products } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Droplets, Sun, Wind } from "lucide-react";

const skinTypes = [
  {
    type: "Oily Skin",
    icon: <Droplets className="w-6 h-6" />,
    emoji: "💧",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    description:
      "Oily skin produces excess sebum, leading to shine and enlarged pores. Herbal actives like neem and turmeric help control oil and prevent breakouts naturally.",
    tips: [
      "Cleanse twice daily",
      "Use lightweight moisturizers",
      "Avoid heavy creams",
    ],
    productIds: [2, 3, 8],
  },
  {
    type: "Dry Skin",
    icon: <Sun className="w-6 h-6" />,
    emoji: "🌟",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    description:
      "Dry skin lacks moisture and can feel tight or flaky. Rich herbal butters and aloe vera deeply nourish and restore the skin's natural moisture barrier.",
    tips: [
      "Moisturize while skin is damp",
      "Use rich cream-based products",
      "Hydrate from within",
    ],
    productIds: [1, 6, 10],
  },
  {
    type: "Normal Skin",
    icon: <Wind className="w-6 h-6" />,
    emoji: "🌿",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    description:
      "Normal skin has balanced oil and moisture. Gentle herbal care helps maintain this balance and protect the skin from environmental stressors.",
    tips: [
      "Maintain a consistent routine",
      "Use SPF protection daily",
      "Exfoliate weekly",
    ],
    productIds: [2, 1, 4],
  },
];

export default function SkinGuide() {
  const getProduct = (id: number) => products.find((p) => p.id === id);

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
          Skin Type Guide
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Find the perfect Nira products for your skin
        </p>
      </header>

      <div className="px-4 space-y-5">
        {skinTypes.map((skin) => (
          <div
            key={skin.type}
            className={`rounded-3xl border-2 p-4 ${skin.color}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-card ${skin.iconColor}`}
              >
                {skin.icon}
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-foreground">
                  {skin.emoji} {skin.type}
                </h2>
              </div>
            </div>

            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              {skin.description}
            </p>

            <div className="mb-3">
              <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                Quick Tips
              </p>
              <ul className="space-y-1">
                {skin.tips.map((tip) => (
                  <li
                    key={tip}
                    className="text-xs text-foreground/70 flex items-start gap-1.5"
                  >
                    <span className="text-primary mt-0.5">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
              Recommended Products
            </p>
            <div className="space-y-2">
              {skin.productIds.map((pid) => {
                const product = getProduct(pid);
                if (!product) return null;
                return (
                  <Link
                    key={pid}
                    to="/product/$id"
                    params={{ id: String(pid) }}
                    className="flex items-center gap-3 bg-white rounded-2xl p-2.5 shadow-card hover:shadow-card-hover transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {product.name}
                      </p>
                      <p className="text-sm font-bold text-primary">
                        ₹{product.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
