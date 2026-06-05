"use client";
import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Lock } from "lucide-react";
import { CONTACT, waLink, telLink } from "@/lib/contact";
import { useReveal } from "@/lib/useReveal";
import { useT } from "@/lib/LanguageContext";
import SearchableSelect from "@/components/SearchableSelect";
import { LOCATIONS } from "@/lib/locations";

// Turkish values are always sent in the WhatsApp message (decision A).
// Displayed labels in the <select> are translated via t().
const TR_TRIP_VALUES = [
  "Havalimanı transferi",
  "Şehir içi transfer",
  "Şehirlerarası yolculuk",
  "Grup / özel gezi",
  "Diğer",
];

export default function Contact() {
  const ref = useReveal();
  const { t } = useT();
  const [sending, setSending] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k) => (d.get(k) || "").toString().trim();
    const route = from && to ? `${from} → ${to}` : from || to || "-";

    // Structured field labels stay in Turkish (business owner reads them)
    const lines = [
      "🚐 *Gültekin VIP Transfer — Rezervasyon Talebi*",
      "",
      `👤 Ad Soyad: ${get("name") || "-"}`,
      `📞 Telefon: ${get("phone") || "-"}`,
      `🗺️ Güzergah: ${route}`,
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

  const tripLabels = t("contact.tripTypes");

  return (
    <section className="section section--alt" id="iletisim" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">{t("contact.eyebrow")}</span>
          <h2 className="h-section">{t("contact.heading")}</h2>
          <p>{t("contact.sub")}</p>
        </div>

        <div className="contact">
          <div className="contact__info reveal">
            <a
              className="contact-card contact-card--wa"
              href={waLink(t("contact.waCardMsg"))}
              target="_blank"
              rel="noopener"
            >
              <span className="contact-card__ic"><MessageCircle /></span>
              <span>
                <span className="contact-card__label">{t("contact.waCardLabel")}</span>
                <span className="contact-card__val">
                  {t("contact.waCardVal")} <span className="soft">· {t("contact.waCardSoft")}</span>
                </span>
              </span>
            </a>
            <a className="contact-card" href={telLink}>
              <span className="contact-card__ic"><Phone /></span>
              <span>
                <span className="contact-card__label">{t("contact.phoneLabel")}</span>
                <span className="contact-card__val">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
            <div className="contact-card">
              <span className="contact-card__ic"><MapPin /></span>
              <span>
                <span className="contact-card__label">{t("contact.locationLabel")}</span>
                <span className="contact-card__val">{CONTACT.location}</span>
              </span>
            </div>
            <div className="contact-card">
              <span className="contact-card__ic"><Clock /></span>
              <span>
                <span className="contact-card__label">{t("contact.hoursLabel")}</span>
                <span className="contact-card__val">
                  {t("contact.hoursVal")} <span className="soft">· {t("contact.hoursSoft")}</span>
                </span>
              </span>
            </div>
          </div>

          <form className="form-card reveal" data-d="1" onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="f-name">
                  {t("contact.fName")} <span className="req">*</span>
                </label>
                <input id="f-name" name="name" type="text" placeholder={t("contact.fNamePh")} required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">
                  {t("contact.fPhone")} <span className="req">*</span>
                </label>
                <input id="f-phone" name="phone" type="tel" placeholder={t("contact.fPhonePh")} required />
              </div>
              <div className="field">
                <label htmlFor="f-from">{t("contact.fFrom")}</label>
                <SearchableSelect
                  id="f-from"
                  name="from"
                  placeholder={t("contact.fFromPh")}
                  options={LOCATIONS}
                  value={from}
                  onChange={setFrom}
                  noResults={t("ss.noResults")}
                />
              </div>
              <div className="field">
                <label htmlFor="f-to">{t("contact.fTo")}</label>
                <SearchableSelect
                  id="f-to"
                  name="to"
                  placeholder={t("contact.fToPh")}
                  options={LOCATIONS}
                  value={to}
                  onChange={setTo}
                  noResults={t("ss.noResults")}
                />
              </div>
              <div className="field">
                <label htmlFor="f-date">{t("contact.fDate")}</label>
                <input id="f-date" name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor="f-people">{t("contact.fPeople")}</label>
                <input id="f-people" name="people" type="number" min="1" max="16" placeholder={t("contact.fPeoplePh")} />
              </div>
              <div className="field field--full">
                <label htmlFor="f-vehicle">{t("contact.fTripType")}</label>
                <select id="f-vehicle" name="vehicle" defaultValue={TR_TRIP_VALUES[0]}>
                  {TR_TRIP_VALUES.map((val, i) => (
                    <option key={val} value={val}>{tripLabels[i]}</option>
                  ))}
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="f-msg">{t("contact.fMsg")}</label>
                <textarea id="f-msg" name="message" placeholder={t("contact.fMsgPh")}></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn--wa btn--lg btn--block form-card__submit"
              disabled={sending}
            >
              {sending ? t("contact.submitting") : <><MessageCircle /> {t("contact.submit")}</>}
            </button>
            <p className="form-card__note">
              <Lock /> {t("contact.formNote")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
