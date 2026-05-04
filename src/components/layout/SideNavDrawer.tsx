import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";

const DRAWER_HEADER_BG = "/imagenes/iconos-paginaWeb/laurel.png";

type SideNavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function IconHomeNav() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconQr() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6z" stroke="currentColor" strokeWidth="2" />
      <path d="M14 14h2v2h-2v-2zm4 0h2v6h-6v-2h4v-4zm-4 4h2v2h-2v-2z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconInvite() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 20a5 5 0 0110 0M11 20a4 4 0 017-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.35-7-10a5 5 0 019.9-1 5 5 0 019.9 1c0 5.65-7 10-7 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconHelp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 16v.01M10.5 10a1.5 1.5 0 113 0c0 1-1.5 2-1.5 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLogout() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.95 7.05a7 7 0 10-9.9 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SideNavDrawer({ open, onClose }: SideNavDrawerProps) {
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="side-nav" role="presentation">
      <button
        type="button"
        className="side-nav__backdrop"
        aria-label="Cerrar menú"
        onClick={onClose}
      />
      <nav id="side-navigation" className="side-nav__panel" aria-label="Menú principal">
        <div
          className="side-nav__hero"
          style={{ backgroundImage: `url(${DRAWER_HEADER_BG})` }}
        >
          <div className="side-nav__hero-content">
            <div className="side-nav__brand">
              <span className="side-nav__brand-text">GOD FIT</span>
            </div>
            {isAuthenticated && user && (
              <div className="side-nav__profile">
                <span className="side-nav__user-name">{user.name}</span>
              </div>
            )}
          </div>
        </div>

        <ul className="side-nav__list">
          <li>
            <Link to="/" className="side-nav__item" onClick={onClose}>
              <span className="side-nav__item-icon">
                <IconHomeNav />
              </span>
              Inicio
            </Link>
          </li>
          <li>
            <button type="button" className="side-nav__item" onClick={onClose}>
              <span className="side-nav__item-icon">
                <IconQr />
              </span>
              Código QR
            </button>
          </li>
          <li>
            <button type="button" className="side-nav__item" onClick={onClose}>
              <span className="side-nav__item-icon">
                <IconInvite />
              </span>
              Invita a tus amigos
            </button>
          </li>
          {isAuthenticated && (
            <li>
              <button type="button" className="side-nav__item" onClick={onClose}>
                <span className="side-nav__item-icon">
                  <IconHeart />
                </span>
                Mi perfil
              </button>
            </li>
          )}
          <li>
            <button type="button" className="side-nav__item" onClick={onClose}>
              <span className="side-nav__item-icon">
                <IconPin />
              </span>
              Localizador de clubs
            </button>
          </li>
          <li>
            <button type="button" className="side-nav__item" onClick={onClose}>
              <span className="side-nav__item-icon">
                <IconHelp />
              </span>
              Soporte
            </button>
          </li>
          {isAuthenticated && (
            <li>
              <button
                type="button"
                className="side-nav__item side-nav__item--logout"
                onClick={() => {
                  logout();
                  onClose();
                }}
              >
                <span className="side-nav__item-icon">
                  <IconLogout />
                </span>
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>

        <p className="side-nav__version">Versión 2.0.9</p>
      </nav>
    </div>
  );
}
