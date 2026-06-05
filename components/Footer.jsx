"use client";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT, waLink, telLink } from "@/lib/contact";
import { useT } from "@/lib/LanguageContext";

const NAV_HREFS = ["#hero", "#araclar", "#hizmetler", "#bolgeler", "#iletisim"];
const SERVICE_HREFS = ["#hizmetler", "#hizmetler", "#hizmetler", "#hizmetler"];

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  const menuLinks = t("footer.menuLinks");
  const serviceLinks = t("footer.serviceLinks");

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="brand">
              <span className="brand__mark">G</span>
              <span>
                <span className="brand__name">Gültekin</span>
                <span className="brand__sub">VIP Transfer</span>
              </span>
            </div>
            <p className="footer__about">{t("footer.about")}</p>
            <div className="footer__social">
              <a href={waLink(t("footer.waMsg"))} target="_blank" rel="noopener" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>{t("footer.menuHead")}</h4>
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href}>{menuLinks[i]}</a>
            ))}
          </div>

          <div className="footer__col">
            <h4>{t("footer.servicesHead")}</h4>
            {SERVICE_HREFS.map((href, i) => (
              <a key={i} href={href}>{serviceLinks[i]}</a>
            ))}
          </div>

          <div className="footer__col">
            <h4>{t("footer.contactHead")}</h4>
            <div className="row">
              <Phone />{" "}
              <a href={telLink}>{CONTACT.phoneDisplay}</a>
            </div>
            <div className="row">
              <MessageCircle />{" "}
              <a href={waLink(t("footer.waMsg"))} target="_blank" rel="noopener">
                {t("footer.waLinkText")}
              </a>
            </div>
            <div className="row">
              <MapPin /> <span>{CONTACT.location}</span>
            </div>
            <div className="row">
              <Clock /> <span>{t("footer.hoursVal")}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {t("footer.copyrightSuffix")}</span>
          <span className="made">{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
