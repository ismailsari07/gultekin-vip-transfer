"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, waLink, telLink } from "@/lib/contact";

const LINKS = [
  ["#hero", "Anasayfa"],
  ["#araclar", "Araçlar"],
  ["#hizmetler", "Hizmetler"],
  ["#bolgeler", "Bölgeler"],
  ["#iletisim", "İletişim"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap nav__inner">
          <a href="#hero" className="brand" aria-label="Gültekin VIP Transfer">
            <span className="brand__mark">G</span>
            <span>
              <span className="brand__name">Gültekin</span>
              <span className="brand__sub">VIP Transfer</span>
            </span>
          </a>

          <nav className="nav__menu">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} className="nav__link">
                {label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--accent" href={telLink}>
              <Phone /> Hemen Ara
            </a>
            <button
              className={`burger${open ? " open" : ""}`}
              aria-label="Menü"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`scrim${open ? " show" : ""}`} onClick={() => setOpen(false)}></div>
      <aside className={`mobile-menu${open ? " open" : ""}`}>
        {[...LINKS, ["#neden", "Neden Biz"]].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="btn btn--wa btn--block"
          href={waLink("Merhaba, transfer için bilgi almak istiyorum.")}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          <MessageCircle /> WhatsApp&apos;tan Yaz
        </a>
      </aside>
    </>
  );
}
