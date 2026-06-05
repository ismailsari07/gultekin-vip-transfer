"use client";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT, waLink, telLink } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
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
            <p className="footer__about">
              Antalya merkezli VIP transfer ve turizm taşımacılığı. Konforlu araç, deneyimli şoför
              ve 7/24 hizmet.
            </p>
            <div className="footer__social">
              <a href={waLink("Merhaba")} target="_blank" rel="noopener" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Menü</h4>
            <a href="#hero">Anasayfa</a>
            <a href="#araclar">Araçlar</a>
            <a href="#hizmetler">Hizmetler</a>
            <a href="#bolgeler">Bölgeler</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <div className="footer__col">
            <h4>Hizmetler</h4>
            <a href="#hizmetler">Havalimanı transferi</a>
            <a href="#hizmetler">Şehirlerarası yolculuk</a>
            <a href="#hizmetler">Grup gezileri</a>
            <a href="#hizmetler">Günlük kiralama</a>
          </div>

          <div className="footer__col">
            <h4>İletişim</h4>
            <div className="row">
              <Phone />{" "}
              <a href={telLink}>{CONTACT.phoneDisplay}</a>
            </div>
            <div className="row">
              <MessageCircle />{" "}
              <a href={waLink("Merhaba")} target="_blank" rel="noopener">
                WhatsApp&apos;tan yazın
              </a>
            </div>
            <div className="row">
              <MapPin /> <span>{CONTACT.location}</span>
            </div>
            <div className="row">
              <Clock /> <span>7/24 hizmet</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Gültekin VIP Transfer. Tüm hakları saklıdır.</span>
          <span className="made">Antalya · VIP Transfer &amp; Turizm Taşımacılığı</span>
        </div>
      </div>
    </footer>
  );
}
