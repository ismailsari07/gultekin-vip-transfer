"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "gultekin_lang";

// Resolve a dot-path key (e.g. "nav.callBtn") against the active language object.
// Returns the value at that path — string, array, or object — or the key itself as fallback.
function resolve(obj, path) {
  return path.split(".").reduce((acc, k) => (acc != null ? acc[k] : undefined), obj) ?? path;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("tr"); // default matches pre-rendered HTML

  // Read persisted preference after hydration (avoids SSR mismatch)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en") setLangState("en");
  }, []);

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(l) {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }

  function t(path) {
    return resolve(translations[lang], path);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside <LanguageProvider>");
  return ctx;
}
