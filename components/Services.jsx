"use client";
import { Map, Plane, Route, Users, CalendarDays, MapPinned } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const ITEMS = [
  { Icon: Map, title: "Antalya içi tur & transfer", text: "Otel, plaj, alışveriş ve gezi noktaları arası konforlu şehir içi ulaşım." },
  { Icon: Plane, title: "Havalimanı transferi", text: "Uçuşunuza göre planlı karşılama ve uğurlama; isim tabelasıyla kapıda hazırız." },
  { Icon: Route, title: "Şehirlerarası yolculuk", text: "Türkiye geneli, özellikle Ege Bölgesi'ne güvenli ve konforlu uzun yol transferi." },
  { Icon: Users, title: "Grup gezileri", text: "Aileler, ekipler ve turlar için planlı, ekonomik ve keyifli grup taşımacılığı." },
  { Icon: CalendarDays, title: "Günlük kiralama", text: "Şoförlü günlük araç tahsisi; gün boyu programınıza özel esnek kullanım." },
  { Icon: MapPinned, title: "Özel rota & VIP gezi", text: "Pamukkale, Kapadokya, Ege kıyıları… dilediğiniz rotaya özel program." },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section className="section" id="hizmetler" ref={ref}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2 className="h-section">Her yolculuk için bir çözüm</h2>
          <p>Antalya içinden Türkiye geneline, tek bir transferden günübirlik gruplara kadar.</p>
        </div>

        <div className="services-grid">
          {ITEMS.map(({ Icon, title, text }, i) => (
            <article className="service reveal" data-d={(i % 3) + 1} key={title}>
              <span className="service__line"></span>
              <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="service__icon">
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
