"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export default function SearchableSelect({ id, name, placeholder, options, value, onChange, noResults = "Sonuç bulunamadı" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  const filtered = query.trim()
    ? options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
    : options;

  // Close on outside click / blur
  useEffect(() => {
    function onPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function openDropdown() {
    setQuery("");
    setOpen(true);
    inputRef.current?.focus();
  }

  function close() {
    setOpen(false);
    setQuery("");
  }

  function pick(opt) {
    onChange(opt);
    close();
  }

  function clearValue(e) {
    e.stopPropagation();
    onChange("");
    setQuery("");
    setOpen(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") close();
  }

  // Input shows the search query while open, selected value while closed.
  const inputVal = open ? query : (value || "");
  const showPlaceholder = open ? placeholder + " ara…" : placeholder;

  return (
    <div className="ss" ref={wrapRef}>
      {/* Control row */}
      <div
        className={`ss__ctrl${open ? " ss__ctrl--open" : ""}`}
        onClick={() => { if (!open) openDropdown(); }}
      >
        <input
          ref={inputRef}
          id={id}
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder={showPlaceholder}
          value={inputVal}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (!open) openDropdown(); }}
          onKeyDown={handleKeyDown}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-autocomplete="list"
        />
        <span className="ss__ctrl-icons">
          {value && (
            <button
              type="button"
              tabIndex={-1}
              className="ss__clear"
              onClick={clearValue}
              aria-label="Temizle"
            >
              <X />
            </button>
          )}
          <ChevronDown className={`ss__chevron${open ? " open" : ""}`} />
        </span>
      </div>

      {/* Dropdown list */}
      {open && (
        <ul className="ss__list" role="listbox" aria-label={placeholder}>
          {filtered.length > 0 ? (
            filtered.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                className={`ss__item${opt === value ? " active" : ""}`}
                onPointerDown={(e) => { e.preventDefault(); pick(opt); }}
              >
                {opt}
              </li>
            ))
          ) : (
            <li className="ss__item ss__item--none">{noResults}</li>
          )}
        </ul>
      )}

      {/* Hidden input so native FormData picks up the value */}
      <input type="hidden" name={name} value={value || ""} />
    </div>
  );
}
