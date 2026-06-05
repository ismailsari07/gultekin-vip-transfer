"use client";
import { useState } from "react";
import {
  Armchair, MonitorPlay, Lightbulb, Blinds, Snowflake, Luggage,
  CalendarCheck, MessageCircle,
} from "lucide-react";
import { waLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";

const PHOTOS = [
  { src: "/images/ford-ic-salon.jpg", label: "İç mekan salon" },
  { src: "/images/ford-dis-on.jpg", label: "Dış görünüm ön" },
  { src: "/images/ford-dis-yan.jpg", label: "Dış görünüm yan kapı" },
  { src: "/images/ford-ic-tv.jpg", label: "İç mekan ekran" },
  { src: "/images/ford-ic-bagaj.jpg", label: "Bagaj bölümü" },
];

const FEATS = [
  { Icon: Armchair, text: "El işçiliği deri salon" },
  { Icon: MonitorPlay, text: "Geniş ekran" },
  { Icon: Lightbulb, text: "Ambiyans aydınlatma" },
  { Icon: Blinds, text: "Perdeli özel cam" },
  { Icon: Snowflake, text: "Güçlü klima" },
  { Icon: Luggage, text: "Geniş bagaj hacmi" },
];

export default function VehicleShowcase() {
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section className="section section--alt" id="araclar" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Aracımız</span>
          <h2 className="h-section">Özel tasarım Ford VIP</h2>
          <p>
            Tek bir aracımız var; ama tam donanımlı. El işçiliğiyle döşenmiş deri salon, ekran ve
            ambiyans aydınlatmasıyla yolculuğu bir deneyime dönüştürür.
          </p>
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
              <h3 className="vehicle__name">Ford VIP Transfer</h3>
              <span className="vehicle__cap">VIP · özel döşeme</span>
            </div>
            <p className="showcase__desc">
              Geniş deri koltuklar, sessiz iç mekan ve sıcak ambiyans aydınlatmasıyla havalimanı
              transferinden uzun yola kadar premium konfor. Perdeli camlar ve ekran ile özel
              alanınız yolda da yanınızda.
            </p>
            <ul className="showcase__feats">
              {FEATS.map(({ Icon, text }) => (
                <li key={text}>
                  <Icon /> {text}
                </li>
              ))}
            </ul>
            <div className="showcase__cta">
              <a href="#iletisim" className="btn btn--primary btn--lg">
                <CalendarCheck /> Rezervasyon
              </a>
              <a
                className="btn btn--wa btn--lg"
                href={waLink("Merhaba, Ford VIP aracınız için rezervasyon yapmak istiyorum.")}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle /> WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
