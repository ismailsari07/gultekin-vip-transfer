"use client";
import { Armchair, UserCheck, MonitorPlay, Clock } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const ITEMS = [
  { Icon: Armchair, title: "Konforlu araç", text: "Geniş iç hacim, güçlü klima ve bakımlı VIP koltuklarla uzun yollarda bile dinç kalın." },
  { Icon: UserCheck, title: "Deneyimli şoför", text: "Bölgeyi iyi bilen, güvenli ve sakin sürüş yapan profesyonel şoförler eşliğinde." },
  { Icon: MonitorPlay, title: "Ekranlı koltuklar", text: "Koltuk arkasında ekran; yolculuk boyunca eğlence ve konfor bir arada." },
  { Icon: Clock, title: "7/24 hizmet", text: "Gece geç saatli uçuşlar dahil, ihtiyacınız olan her an yanınızdayız." },
];

export default function Features() {
  const ref = useReveal();
  return (
    <section className="section" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">Neden Gültekin</span>
          <h2 className="h-section">Yolculuğunuzu özel kılan detaylar</h2>
          <p>Her transferde aynı standart: temiz araç, güler yüzlü şoför ve zamanında hizmet.</p>
        </div>

        <div className="features-grid">
          {ITEMS.map(({ Icon, title, text }, i) => (
            <article className="feature reveal" data-d={i + 1} key={title}>
              <div className="feature__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
