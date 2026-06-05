"use client";
import { useEffect, useRef } from "react";

// Scroll-reveal: görünür olunca .in sınıfını ekler (globals.css'teki .reveal ile çalışır)
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current || document;
    const els = root.querySelectorAll(".reveal:not(.in)");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Güvenlik ağı
    const t = setTimeout(() => els.forEach((el) => el.classList.add("in")), 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return ref;
}
