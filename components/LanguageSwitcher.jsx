"use client";
import { useT } from "@/lib/LanguageContext";

const META = {
  tr: { flag: "🇹🇷", short: "TR", full: "Türkçeye Geç" },
  en: { flag: "🇬🇧", short: "EN", full: "Switch to English" },
};

// className lets callers add modifier classes (e.g. "lang-btn--menu")
export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useT();
  const next = lang === "tr" ? "en" : "tr";
  const { flag, short, full } = META[next];

  return (
    <button
      className={`lang-btn${className ? ` ${className}` : ""}`}
      onClick={() => setLang(next)}
      aria-label={full}
      title={full}
      type="button"
    >
      <span className="lang-btn__flag" aria-hidden="true">{flag}</span>
      <span className="lang-btn__short">{short}</span>
      <span className="lang-btn__full">{full}</span>
    </button>
  );
}
