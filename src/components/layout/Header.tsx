import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SideNavDrawer } from "@/components/layout/SideNavDrawer";
import { HOME_TOP_NAV } from "@/data/homeNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation().pathname;
  const title =
    pathname === "/login"
      ? "Iniciar sesión"
      : pathname === "/registro"
        ? "Registrarse"
        : pathname === "/entrenamientos/planes"
          ? "Planes de entrenamiento"
          : pathname === "/entrenamientos"
            ? "Entrenamientos"
            : "Inicio";

  const showHomeNav = pathname === "/" || pathname === "/valoranos";

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
      {showHomeNav ? (
        <div className="app-header__center">
          {pathname === "/" ? <h1 className="sr-only">Inicio</h1> : null}
          <nav className="app-header__nav" aria-label="Principal">
            {HOME_TOP_NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `app-header__nav-link${isActive ? " app-header__nav-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : (
        <h1 className="app-header__title">{title}</h1>
      )}
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
