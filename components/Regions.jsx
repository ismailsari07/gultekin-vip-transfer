"use client";
import { MapPin, Star, Info } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

// Proper place names — not translated
const REGIONS = ["İzmir", "Muğla", "Bodrum", "Fethiye", "Kuşadası", "Marmaris", "Pamukkale", "Denizli"];

export default function Regions() {
  const ref = useReveal();
  const { t } = useT();

  return (
    <section className="section section--alt" id="bolgeler" ref={ref}>
      <div className="wrap">
        <div className="regions">
          <div className="regions__map reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bolge-koy.jpg"
              alt={t("regions.imgAlt")}
              loading="lazy"
            />
            <span className="regions__map-tag">
              <MapPin /> {t("regions.mapTag")}
            </span>
          </div>
          <div className="regions__content reveal" data-d="1">
            <span className="eyebrow">{t("regions.eyebrow")}</span>
            <h2 className="h-section">{t("regions.heading")}</h2>
            <p className="lede">{t("regions.lede")}</p>
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
              <span>{t("regions.note")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
