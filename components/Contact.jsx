"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Lock } from "lucide-react";
import { CONTACT, waLink, telLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";

export default function Contact() {
  const ref = useReveal();
  const [sending, setSending] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k) => (d.get(k) || "").toString().trim();
    const lines = [
      "🚐 *Gültekin VIP Transfer — Rezervasyon Talebi*",
      "",
      `👤 Ad Soyad: ${get("name") || "-"}`,
      `📞 Telefon: ${get("phone") || "-"}`,
      `🗺️ Güzergah: ${get("route") || "-"}`,
      `📅 Tarih: ${get("date") || "-"}`,
      `👥 Kişi sayısı: ${get("people") || "-"}`,
      `🧭 Yolculuk tipi: ${get("vehicle") || "-"}`,
    ];
    const note = get("message");
    if (note) lines.push("", `📝 Not: ${note}`);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setSending(true);
    setTimeout(() => setSending(false), 3200);
  }

  return (
    <section className="section section--alt" id="iletisim" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">İletişim & Rezervasyon</span>
          <h2 className="h-section">Yolculuğunuzu birlikte planlayalım</h2>
          <p>
            Formu doldurun, bilgileriniz WhatsApp üzerinden bize ulaşsın. Genelde dakikalar içinde
            dönüş yapıyoruz.
          </p>
        </div>

        <div className="contact">
          <div className="contact__info reveal">
            <a
              className="contact-card contact-card--wa"
              href={waLink("Merhaba, transfer için bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener"
            >
              <span className="contact-card__ic">
                <MessageCircle />
              </span>
              <span>
                <span className="contact-card__label">WhatsApp</span>
                <span className="contact-card__val">
                  Hemen yazın <span className="soft">· en hızlı dönüş</span>
                </span>
              </span>
            </a>
            <a className="contact-card" href={telLink}>
              <span className="contact-card__ic">
                <Phone />
              </span>
              <span>
                <span className="contact-card__label">Telefon</span>
                <span className="contact-card__val">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
            <div className="contact-card">
              <span className="contact-card__ic">
                <MapPin />
              </span>
              <span>
                <span className="contact-card__label">Konum</span>
                <span className="contact-card__val">{CONTACT.location}</span>
              </span>
            </div>
            <div className="contact-card">
              <span className="contact-card__ic">
                <Clock />
              </span>
              <span>
                <span className="contact-card__label">Çalışma saatleri</span>
                <span className="contact-card__val">
                  7/24 <span className="soft">· her gün açığız</span>
                </span>
              </span>
            </div>
          </div>

          <form className="form-card reveal" data-d="1" onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="f-name">
                  Ad Soyad <span className="req">*</span>
                </label>
                <input id="f-name" name="name" type="text" placeholder="Adınız ve soyadınız" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">
                  Telefon <span className="req">*</span>
                </label>
                <input id="f-phone" name="phone" type="tel" placeholder="05XX XXX XX XX" required />
              </div>
              <div className="field field--full">
                <label htmlFor="f-route">Güzergah</label>
                <input id="f-route" name="route" type="text" placeholder="Örn: Antalya Havalimanı → Kemer" />
              </div>
              <div className="field">
                <label htmlFor="f-date">Tarih</label>
                <input id="f-date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="f-people">Kişi sayısı</label>
                <input id="f-people" name="people" type="number" min="1" max="16" placeholder="Örn: 4" />
              </div>
              <div className="field field--full">
                <label htmlFor="f-vehicle">Yolculuk tipi</label>
                <select id="f-vehicle" name="vehicle" defaultValue="Havalimanı transferi">
                  <option>Havalimanı transferi</option>
                  <option>Şehir içi transfer</option>
                  <option>Şehirlerarası yolculuk</option>
                  <option>Grup / özel gezi</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="f-msg">Mesajınız</label>
                <textarea id="f-msg" name="message" placeholder="Yolculuğunuzla ilgili eklemek istedikleriniz…"></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn--wa btn--lg btn--block form-card__submit" disabled={sending}>
              {sending ? (
                "✓ WhatsApp'a yönlendiriliyorsunuz…"
              ) : (
                <>
                  <MessageCircle /> WhatsApp&apos;tan Gönder
                </>
              )}
            </button>
            <p className="form-card__note">
              <Lock /> Bilgileriniz WhatsApp mesajına dönüştürülür, hiçbir yerde saklanmaz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
