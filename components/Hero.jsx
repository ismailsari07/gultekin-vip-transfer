"use client";
import { CalendarCheck, MessageCircle, ShieldCheck, MonitorPlay, Clock } from "lucide-react";
import { waLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";

export default function Hero() {
  const ref = useReveal();
  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__bg"></div>
      <div className="hero__scrim"></div>
      <span className="hero__tag">GÜLTEKİN VIP · ÖZEL TASARIM FORD VIP ARAÇ</span>

      <div className="wrap hero__inner">
        <div className="hero__content">
          <span className="hero__pill reveal">
            <span className="dot"></span> Antalya merkezli · 7/24 VIP transfer
          </span>
          <h1 className="reveal" data-d="1">
            Antalya&apos;da konforlu ve güvenli <span className="accent">VIP transfer</span>
          </h1>
          <p className="hero__lede reveal" data-d="2">
            Havalimanı karşılamadan şehirlerarası yolculuğa, ekranlı VIP koltuklar ve deneyimli
            şoförlerle Akdeniz&apos;in keyfini yol boyunca yaşayın.
          </p>
          <div className="hero__cta reveal" data-d="3">
            <a href="#iletisim" className="btn btn--accent btn--lg">
              <CalendarCheck /> Rezervasyon
            </a>
            <a
              className="btn btn--wa btn--lg"
              href={waLink("Merhaba, transfer için fiyat ve müsaitlik öğrenebilir miyim?")}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle /> WhatsApp&apos;tan Yaz
            </a>
          </div>
          <div className="hero__trust reveal" data-d="4">
            <span className="hero__trust-item">
              <ShieldCheck /> Güvenli &amp; sigortalı yolculuk
            </span>
            <span className="hero__trust-item">
              <MonitorPlay /> Koltuklarda ekran
            </span>
            <span className="hero__trust-item">
              <Clock /> 7/24 hizmet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
