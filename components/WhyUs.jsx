"use client";
import { ShieldCheck, Sparkles, BadgeCheck, Headset } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

const VALUE_ICONS = [ShieldCheck, Sparkles, BadgeCheck, Headset];

// Stat display numbers are numeric/universal — only labels translate
const STAT_NUMS = [
  <>7/<span className="u">24</span></>,
  "VIP",
  <>81<span className="u">+</span></>,
  "%100",
];

export default function WhyUs() {
  const ref = useReveal();
  const { t } = useT();
  const values = t("whyUs.values");
  const statLabels = t("whyUs.statLabels");

  return (
    <section className="section" id="neden" ref={ref}>
      <div className="wrap">
        <div className="why reveal">
          <div className="why__grid">
            <div>
              <span className="eyebrow">{t("whyUs.eyebrow")}</span>
              <h2 className="h-section">{t("whyUs.heading")}</h2>
              <p className="lede">{t("whyUs.lede")}</p>
              <ul className="why__values">
                {values.map((text, i) => {
                  const Icon = VALUE_ICONS[i];
                  return (
                    <li key={i}>
                      <span className="ic"><Icon /></span> {text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="stats">
              {STAT_NUMS.map((num, i) => (
                <div className="stat" key={i}>
                  <div className="stat__num">{num}</div>
                  <div className="stat__label">{statLabels[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
