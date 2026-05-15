import { PLANES_ENTRENAMIENTO } from "@/data/planesEntrenamiento";

function ChevronIcon() {
  return (
    <svg
      className="planes-list__chevron"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanesEntrenamientoPage() {
  return (
    <div className="planes-page">
      <ul className="planes-list">
        {PLANES_ENTRENAMIENTO.map((label) => (
          <li key={label}>
            <button type="button" className="planes-list__item">
              <span className="planes-list__label">{label}</span>
              <ChevronIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
