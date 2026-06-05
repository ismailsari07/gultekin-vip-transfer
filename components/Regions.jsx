"use client";
import { MapPin, Star, Info } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const REGIONS = ["İzmir", "Muğla", "Bodrum", "Fethiye", "Kuşadası", "Marmaris", "Pamukkale", "Denizli"];

export default function Regions() {
  const ref = useReveal();
  return (
    <section className="section section--alt" id="bolgeler" ref={ref}>
      <div className="wrap">
        <div className="regions">
          <div className="regions__map reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bolge-koy.jpg" alt="Alanya kıyıları — Akdeniz koyu ve doğal kaya kemeri" loading="lazy" />
            <span className="regions__map-tag">
              <MapPin /> Alanya · Akdeniz kıyıları
            </span>
          </div>
          <div className="regions__content reveal" data-d="1">
            <span className="eyebrow">Hizmet Bölgelerimiz</span>
            <h2 className="h-section">Antalya merkezli, Türkiye geneli</h2>
            <p className="lede">
              Antalya&apos;dan başlıyor, Türkiye&apos;nin her noktasına gidiyoruz. Özellikle Ege
              Bölgesi rotalarında deneyimliyiz.
            </p>
            <div className="regions__list">
              <span className="region-chip region-chip--star">
                <Star /> Antalya
              </span>
              {REGIONS.map((r) => (
                <span className="region-chip" key={r}>
                  <MapPin /> {r}
                </span>
              ))}
            </div>
            <div className="regions__note">
              <Info />
              <span>
                Listede olmayan bir güzergah mı? Türkiye&apos;nin her yerine transfer düzenliyoruz —
                WhatsApp&apos;tan rotanızı yazmanız yeterli.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
