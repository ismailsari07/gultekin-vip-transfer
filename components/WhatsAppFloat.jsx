"use client";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";
import { useT } from "@/lib/LanguageContext";

export default function WhatsAppFloat() {
  const { t } = useT();
  return (
    <a
      className="wa-float"
      href={waLink(t("waFloat.msg"))}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
    >
      <span className="wa-float__ic">
        <MessageCircle />
      </span>
      <span className="wa-float__txt">{t("waFloat.label")}</span>
    </a>
  );
}
