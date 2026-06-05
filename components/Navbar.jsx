"use client";
import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/lib/contact";
import { useT } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_HREFS = ["#hero", "#araclar", "#hizmetler", "#bolgeler", "#iletisim"];

export default function Navbar() {
  const { t } = useT();
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

  const links = t("nav.links");

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
            {NAV_HREFS.map((href, i) => (
              <a key={href} href={href} className="nav__link">
                {links[i]}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <LanguageSwitcher />
            <a className="btn btn--accent" href={telLink}>
              <Phone /> {t("nav.callBtn")}
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
        {NAV_HREFS.map((href, i) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {links[i]}
          </a>
        ))}
        <a href="#neden" onClick={() => setOpen(false)}>
          {t("nav.mobileExtra")}
        </a>
        <LanguageSwitcher className="lang-btn--menu" />
        <a
          className="btn btn--wa btn--block"
          href={waLink(t("nav.waMsg"))}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          <MessageCircle /> {t("nav.waBtn")}
        </a>
      </aside>
    </>
  );
}
