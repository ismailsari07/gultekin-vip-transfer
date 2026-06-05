"use client";
import { Map, Plane, Route, Users, CalendarDays, MapPinned } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

const ICONS = [Map, Plane, Route, Users, CalendarDays, MapPinned];

export default function Services() {
  const ref = useReveal();
  const { t } = useT();
  const items = t("services.items");

  return (
    <section className="section" id="hizmetler" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("services.eyebrow")}</span>
          <h2 className="h-section">{t("services.heading")}</h2>
          <p>{t("services.sub")}</p>
        </div>

        <div className="services-grid">
          {items.map(({ title, text }, i) => {
            const Icon = ICONS[i];
            return (
              <article className="service reveal" data-d={(i % 3) + 1} key={i}>
                <span className="service__line"></span>
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="service__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
