export type EjercicioPlan = {
  nombre: string;
  imagen: string;
  duracion?: string;
  series?: number;
  repeticiones?: number;
  recuperacion: string;
};

export type PlanDetalle = {
  slug: string;
  titulo: string;
  banner: string;
  ejerciciosCount: number;
  minutos: number;
  ejercicios: EjercicioPlan[];
};

const BANNER_PRIMEROS_PASOS = "/imagenes/planes/banner-primeros-pasos.jpg";
const BANNER_EMPIEZA_CON_CONFIANZA =
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80";

export const PLANES_DETALLE: Record<string, PlanDetalle> = {
  "primeros-pasos": {
    slug: "primeros-pasos",
    titulo: "Primeros pasos",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 7,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Elliptic",
        duracion: "5'",
        recuperacion: "< 149 ppm",
        imagen:
          "/imagenes/planes/primeros-pasos/Elíptica946iExperiencie-.webp",
      },
      {
        nombre: "Leg Press",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Chest Press Machine",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Chest-Press-Gym.jpg",
      },
      {
        nombre: "Lat Pulldown",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Lat-Pulldown-Gym.jpg",
      },
      {
        nombre: "Shoulder Press Machine",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Shoulder-Press-Machine-Gym.jpg",
      },
      {
        nombre: "Seated Row",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Seatred-Row-Gym.jpg",
      },
      {
        nombre: "Abdominal Crunch",
        series: 3,
        repeticiones: 15,
        recuperacion: "45 Seg",
        imagen:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  "empieza-con-confianza": {
    slug: "empieza-con-confianza",
    titulo: "Empieza con confianza",
    banner: BANNER_EMPIEZA_CON_CONFIANZA,
    ejerciciosCount: 6,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Bike",
        duracion: "5'",
        recuperacion: "150-160 ppm",
        imagen: "/imagenes/planes/empieza-con-confianza/Bike-Gym.webp",
      },
      {
        nombre: "Leg Press",
        series: 2,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Chest Press Machine",
        series: 2,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Chest-Press-Gym.jpg",
      },
      {
        nombre: "Row Machine",
        series: 2,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Seatred-Row-Gym.jpg",
      },
      {
        nombre: "Elevaciones laterales",
        series: 2,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/empieza-con-confianza/Elevaciones-Laterales-Gym.jpg",
      },
      {
        nombre: "Abdominal Crunch",
        series: 2,
        repeticiones: 15,
        recuperacion: "45 Seg",
        imagen:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
};

export function labelToSlug(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function getPlanDetalle(slug: string): PlanDetalle | undefined {
  return PLANES_DETALLE[slug];
}
