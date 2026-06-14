import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data/content";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet to-[#7a52d6] text-white shadow-glow transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet/40" />
    </a>
  );
}
