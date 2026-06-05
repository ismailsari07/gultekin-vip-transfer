"use client";
import { useState } from "react";
import {
  Armchair, MonitorPlay, Lightbulb, Blinds, Snowflake, Luggage,
  CalendarCheck, MessageCircle,
} from "lucide-react";
import { waLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";

const PHOTO_SRCS = [
  "/images/ford-ic-salon.jpg",
  "/images/ford-dis-on.jpg",
  "/images/ford-dis-yan.jpg",
  "/images/ford-ic-tv.jpg",
  "/images/ford-ic-bagaj.jpg",
];

const FEAT_ICONS = [Armchair, MonitorPlay, Lightbulb, Blinds, Snowflake, Luggage];

export default function VehicleShowcase() {
  const ref = useReveal();
  const { t } = useT();
  const [active, setActive] = useState(0);

  const photoLabels = t("showcase.photoLabels");
  const featTexts = t("showcase.feats");

  const PHOTOS = PHOTO_SRCS.map((src, i) => ({ src, label: photoLabels[i] }));
  const FEATS = FEAT_ICONS.map((Icon, i) => ({ Icon, text: featTexts[i] }));

  return (
    <section className="section section--alt" id="araclar" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t("showcase.eyebrow")}</span>
          <h2 className="h-section">{t("showcase.heading")}</h2>
          <p>{t("showcase.sub")}</p>
        </div>

        <div className="showcase">
          <div className="showcase__gallery reveal">
            <div className="showcase__stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTOS[active].src} alt={`Ford VIP — ${PHOTOS[active].label}`} />
              <span className="showcase__badge">VIP</span>
            </div>
            <div className="showcase__thumbs">
              {PHOTOS.map((p, i) => (
                <button
                  key={p.src}
                  className={`thumb${i === active ? " is-active" : ""}`}
                  aria-label={p.label}
                  onClick={() => setActive(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div className="showcase__info reveal" data-d="1">
            <div className="showcase__head">
              <h3 className="vehicle__name">{t("showcase.vehicleName")}</h3>
              <span className="vehicle__cap">{t("showcase.vehicleCap")}</span>
            </div>
            <p className="showcase__desc">{t("showcase.desc")}</p>
            <ul className="showcase__feats">
              {FEATS.map(({ Icon, text }) => (
                <li key={text}>
                  <Icon /> {text}
                </li>
              ))}
            </ul>
            <div className="showcase__cta">
              <a href="#iletisim" className="btn btn--primary btn--lg">
                <CalendarCheck /> {t("showcase.ctaBook")}
              </a>
              <a
                className="btn btn--wa btn--lg"
                href={waLink(t("showcase.waMsg"))}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle /> {t("showcase.ctaWa")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
