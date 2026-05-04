import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";

const HERO_BG =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80";

const CARD_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
];

function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function IconTrainer() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 5h10v14H9V5zM9 5V3H7v16h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M11 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconApple() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 3c1 0 2 .7 2.5 1.7-.8 0-1.8-.2-2.6-.7-.9-.5-1.8-.5-2.6 0 .5-1 1.5-1.7 2.7-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8c-2.5 2.5-2.5 7 0 9.5 1 1 2.5 1 3.5 0 2.5-2.5 2.5-7 0-9.5-1-1-2.5-1-3.5 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SOCIAL_LINKS: {
  href: string;
  label: string;
  icon: ReactNode;
}[] = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14 9h3V6h-3a4 4 0 00-4 4v3H7v3h3v7h3v-7h3l1-3h-4v-2a1 1 0 011-1h3V9z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    href: "https://x.com/",
    label: "X (Twitter)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 4l7.5 9.6L4 20h2.7l5.8-6.6 4.7 6.6H20l-8-10.2L18.7 4h-2.6l-5.2 5.9L8.3 4H4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21.6 7.2c-.2-1-1-1.7-2-1.9C17.4 5 12 5 12 5s-5.4 0-7.6.3c-1 .2-1.8.9-2 1.9C2 9 2 12 2 12s0 3 .4 4.8c.2 1 1 1.7 2 1.9 2.2.3 7.6.3 7.6.3s5.4 0 7.6-.3c1-.2 1.8-.9 2-1.9.4-1.8.4-4.8.4-4.8s0-3-.4-4.8z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor" />
      </svg>
    ),
  },
];

const HOME_TILES: {
  label: string;
  to: string;
  icon: ReactNode;
  bg: string;
}[] = [
  { label: "Reserva", to: "/reserva", icon: <IconCalendar />, bg: CARD_BACKGROUNDS[0] },
  { label: "Experiencias", to: "/experiencias", icon: <IconStar />, bg: CARD_BACKGROUNDS[1] },
  {
    label: "Entrenamientos",
    to: "/entrenamientos",
    icon: <IconPeople />,
    bg: CARD_BACKGROUNDS[2],
  },
  {
    label: "Personal Trainer",
    to: "/personal-trainer",
    icon: <IconTrainer />,
    bg: CARD_BACKGROUNDS[3],
  },
  { label: "Home Fitness", to: "/home-fitness", icon: <IconHome />, bg: CARD_BACKGROUNDS[4] },
  { label: "Nutrición", to: "/nutricion", icon: <IconApple />, bg: CARD_BACKGROUNDS[5] },
];

function HomeTileLink({
  tile,
  disabled,
}: {
  tile: (typeof HOME_TILES)[number];
  disabled: boolean;
}) {
  const content = (
    <>
      <span
        className="home-card__bg"
        style={{ backgroundImage: `url(${tile.bg})` }}
      />
      <span className="home-card__overlay" aria-hidden />
      <span className="home-card__icon-ring">{tile.icon}</span>
      <span className="home-card__label">{tile.label}</span>
    </>
  );

  if (disabled) {
    return (
      <div
        className="home-card home-card--disabled"
        aria-disabled="true"
        title="Inicia sesión para acceder"
      >
        {content}
      </div>
    );
  }

  return (
    <Link to={tile.to} className="home-card">
      {content}
    </Link>
  );
}

export function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-page">
      <section className="home-hero" aria-label="Destacados">
        <div
          className="home-hero__bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="home-hero__overlay" aria-hidden />
        <div className="home-hero__mustard" aria-hidden />
        <div className="home-hero__controls">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              className="home-hero__arrow"
              aria-label={`Imagen ${i + 1}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </section>

      <div className="home-grid">
        {HOME_TILES.map((tile) => (
          <HomeTileLink
            key={tile.label}
            tile={tile}
            disabled={!isAuthenticated}
          />
        ))}
      </div>

      <footer className="home-social-footer">
        <p className="home-social-footer__title">Síguenos</p>
        <div className="home-social-footer__links">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              className="home-social-footer__link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
