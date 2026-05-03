import { useState } from "react";
import { SideNavDrawer } from "@/components/layout/SideNavDrawer";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="app-header app-header--app">
        <button
          type="button"
          className="app-header__icon-btn"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <h1 className="app-header__title">Inicio</h1>
      <button
        type="button"
        className="app-header__icon-btn"
        aria-label="Notificaciones"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3a5 5 0 00-5 5v2.17l-.98 1.96A1 1 0 007 14h10a1 1 0 00.9-1.45l-.98-1.96V8a5 5 0 00-5-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M10 18a2 2 0 004 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </header>
      <SideNavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
