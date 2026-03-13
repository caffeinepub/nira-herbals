import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Contact() {
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
          Contact Us
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          We'd love to hear from you!
        </p>
      </header>

      <div
        className="mx-4 mb-5 rounded-3xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
      >
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <SiWhatsapp className="w-8 h-8 text-white" />
            <div>
              <h2 className="font-display text-lg font-bold text-white">
                Order via WhatsApp
              </h2>
              <p className="text-white/80 text-xs">
                Fastest way to place your order!
              </p>
            </div>
          </div>
          <p className="text-white/80 text-sm mb-4 leading-relaxed">
            Message us your order details and we'll get back to you within
            minutes.
          </p>
          <a
            href="https://wa.me/919987952276"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.whatsapp.button"
          >
            <Button className="bg-white text-green-700 hover:bg-white/90 font-bold rounded-xl h-11 px-6">
              <SiWhatsapp className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>

      <div className="px-4 space-y-3">
        <div className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">
              Phone / WhatsApp
            </p>
            <a
              href="tel:9987952276"
              className="text-base font-bold text-foreground hover:text-primary transition-colors"
            >
              +91 99879 52276
            </a>
            <p className="text-xs text-muted-foreground">Mon–Sat, 10am–7pm</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
            <SiInstagram className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">
              Instagram
            </p>
            <a
              href="https://instagram.com/niraherbals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-foreground hover:text-primary transition-colors"
            >
              @niraherbals
            </a>
            <p className="text-xs text-muted-foreground">
              DM for offers & updates
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 bg-secondary rounded-2xl p-4">
        <h3 className="font-semibold text-sm text-foreground mb-2">
          Business Hours
        </h3>
        <div className="space-y-1.5">
          {[
            ["Monday – Friday", "10:00 AM – 7:00 PM"],
            ["Saturday", "10:00 AM – 5:00 PM"],
            ["Sunday", "Closed"],
          ].map(([day, hours]) => (
            <div key={day} className="flex justify-between text-xs">
              <span className="text-muted-foreground">{day}</span>
              <span
                className={`font-semibold ${hours === "Closed" ? "text-destructive" : "text-foreground"}`}
              >
                {hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
