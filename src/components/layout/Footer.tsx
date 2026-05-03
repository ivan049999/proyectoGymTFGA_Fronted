import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="app-bottom-nav" role="navigation" aria-label="Principal">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `app-bottom-nav__link${isActive ? " app-bottom-nav__link--active" : ""}`
        }
        aria-label="Inicio"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
      <button type="button" className="app-bottom-nav__link" aria-label="Código QR">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h2v2h-2v-2zm4-3h2v6h-2v-6zm-4 4h2v2h-2v-2z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button type="button" className="app-bottom-nav__link" aria-label="Perfil">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button type="button" className="app-bottom-nav__link" aria-label="Ayuda">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 16v-.5M12 11a2 2 0 100 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </footer>
  );
}
