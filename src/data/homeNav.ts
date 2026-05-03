/** Barra superior en la home: solo Inicio y Valóranos. */
export const HOME_TOP_NAV = [
  { to: "/", label: "Inicio" },
  { to: "/valoranos", label: "Valóranos" },
] as const;

/** Rutas placeholder de secciones (p. ej. enlaces futuros desde el grid). */
export const SECTION_PLACEHOLDER_ROUTES = [
  { to: "/reserva", label: "Reserva" },
  { to: "/experiencias", label: "Experiencias" },
  { to: "/entrenamientos", label: "Entrenamientos" },
  { to: "/personal-trainer", label: "Personal Trainer" },
  { to: "/home-fitness", label: "Home Fitness" },
  { to: "/nutricion", label: "Nutrición" },
] as const;
