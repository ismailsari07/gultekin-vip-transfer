"use client";
import { Armchair, UserCheck, MonitorPlay, Clock } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

const ICONS = [Armchair, UserCheck, MonitorPlay, Clock];

export default function Features() {
  const ref = useReveal();
  const { t } = useT();
  const items = t("features.items");

  return (
    <section className="section" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">{t("features.eyebrow")}</span>
          <h2 className="h-section">{t("features.heading")}</h2>
          <p>{t("features.sub")}</p>
        </div>

        <div className="features-grid">
          {items.map(({ title, text }, i) => {
            const Icon = ICONS[i];
            return (
              <article className="feature reveal" data-d={i + 1} key={i}>
                <div className="feature__icon">
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
