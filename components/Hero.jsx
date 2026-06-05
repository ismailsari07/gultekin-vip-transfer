"use client";
import { CalendarCheck, MessageCircle, ShieldCheck, MonitorPlay, Clock } from "lucide-react";
import { waLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

const TRUST_ICONS = [ShieldCheck, MonitorPlay, Clock];

export default function Hero() {
  const ref = useReveal();
  const { t } = useT();
  const trust = t("hero.trust");

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__bg"></div>
      <div className="hero__scrim"></div>
      <span className="hero__tag">GÜLTEKİN VIP · ÖZEL TASARIM FORD VIP ARAÇ</span>

      <div className="wrap hero__inner">
        <div className="hero__content">
          <span className="hero__pill reveal">
            <span className="dot"></span> {t("hero.pill")}
          </span>
          <h1 className="reveal" data-d="1">
            {t("hero.h1Part1")} <span className="accent">{t("hero.h1Accent")}</span>
            {t("hero.h1Part2") && <> {t("hero.h1Part2")}</>}
          </h1>
          <p className="hero__lede reveal" data-d="2">
            {t("hero.lede")}
          </p>
          <div className="hero__cta reveal" data-d="3">
            <a href="#iletisim" className="btn btn--accent btn--lg">
              <CalendarCheck /> {t("hero.ctaBook")}
            </a>
            <a
              className="btn btn--wa btn--lg"
              href={waLink(t("hero.waMsg"))}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle /> {t("hero.ctaWa")}
            </a>
          </div>
          <div className="hero__trust reveal" data-d="4">
            {trust.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <span className="hero__trust-item" key={i}>
                  <Icon /> {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
