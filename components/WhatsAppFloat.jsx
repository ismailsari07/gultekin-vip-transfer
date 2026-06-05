"use client";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink("Merhaba, transfer hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      <span className="wa-float__ic">
        <MessageCircle />
      </span>
      <span className="wa-float__txt">WhatsApp&apos;tan Yaz</span>
    </a>
  );
}
