import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919987952276"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.fab.button"
      className="fixed bottom-20 right-4 z-40 w-13 h-13 rounded-full flex items-center justify-center shadow-fab transition-transform hover:scale-110 active:scale-95"
      style={{ width: 52, height: 52, backgroundColor: "#25d366" }}
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-6 h-6 text-white" />
    </a>
  );
}
