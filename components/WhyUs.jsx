"use client";
import { ShieldCheck, Sparkles, BadgeCheck, Headset } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const VALUES = [
  { Icon: ShieldCheck, text: "Güvenli sürüş ve sigortalı araç" },
  { Icon: Sparkles, text: "Her yolculuk öncesi temizlenen araç" },
  { Icon: BadgeCheck, text: "Net, sürpriz olmayan uygun fiyat" },
  { Icon: Headset, text: "Yolculuk boyunca kesintisiz iletişim" },
];

const STATS = [
  { num: <>7/<span className="u">24</span></>, label: "Kesintisiz hizmet" },
  { num: "VIP", label: "Özel döşeme Ford araç" },
  { num: <>81<span className="u">+</span></>, label: "İl geneli güzergah" },
  { num: "%100", label: "Temiz & bakımlı araç" },
];

export default function WhyUs() {
  const ref = useReveal();
  return (
    <section className="section" id="neden" ref={ref}>
      <div className="wrap">
        <div className="why reveal">
          <div className="why__grid">
            <div>
              <span className="eyebrow">Neden Biz</span>
              <h2 className="h-section">Güvenle ulaşmanın konforlu yolu</h2>
              <p className="lede">
                Yolculuğunuzun her aşamasında öncelik güvenliğiniz ve konforunuz. Şeffaf fiyat,
                temiz araç, zamanında hizmet.
              </p>
              <ul className="why__values">
                {VALUES.map(({ Icon, text }) => (
                  <li key={text}>
                    <span className="ic">
                      <Icon />
                    </span>{" "}
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stats">
              {STATS.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="stat__num">{s.num}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
