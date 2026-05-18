export type EjercicioPlan = {
  nombre: string;
  imagen: string;
  duracion?: string;
  distancia?: string;
  series?: number;
  repeticiones?: number;
  recuperacion: string;
};

export type PlanDetalle = {
  slug: string;
  titulo: string;
  categoria?: string;
  banner: string;
  ejerciciosCount: number;
  minutos: number;
  ejercicios: EjercicioPlan[];
};

const BANNER_PRIMEROS_PASOS = "/imagenes/planes/banner-primeros-pasos.jpg";

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
    banner: BANNER_PRIMEROS_PASOS,
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
  "full-body": {
    slug: "full-body",
    titulo: "Full body",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 11,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Bike",
        duracion: "5'",
        recuperacion: "< 140 ppm",
        imagen: "/imagenes/planes/empieza-con-confianza/Bike-Gym.webp",
      },
      {
        nombre: "Smith Machine Squat",
        series: 3,
        repeticiones: 8,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/full-body/Smith-Machine-Squat-Gym.jpg",
      },
      {
        nombre: "Knee Extension",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/full-body/Knee-Extension-Gym.webp",
      },
      {
        nombre: "Chest Press",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Chest-Press-Gym.jpg",
      },
      {
        nombre: "Dumbbell Incline Press",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/full-body/Dumbbell-Incline-Press-Gym.webp",
      },
      {
        nombre: "Lat Pulldown",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Lat-Pulldown-Gym.jpg",
      },
      {
        nombre: "Shoulder Press Machine",
        series: 3,
        repeticiones: 10,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/primeros-pasos/Shoulder-Press-Machine-Gym.jpg",
      },
      {
        nombre: "Seated Row",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Seatred-Row-Gym.jpg",
      },
      {
        nombre: "Leg Press",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Elevaciones laterales",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/empieza-con-confianza/Elevaciones-Laterales-Gym.jpg",
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
  "define-tu-zona-superior": {
    slug: "define-tu-zona-superior",
    titulo: "Define tu zona superior",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 6,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Bike",
        duracion: "5'",
        recuperacion: "< 140 ppm",
        imagen: "/imagenes/planes/empieza-con-confianza/Bike-Gym.webp",
      },
      {
        nombre: "Dumbbell Incline Press",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/full-body/Dumbbell-Incline-Press-Gym.webp",
      },
      {
        nombre: "Lat Pulldown",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Lat-Pulldown-Gym.jpg",
      },
      {
        nombre: "Seated Row",
        series: 3,
        repeticiones: 12,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Seatred-Row-Gym.jpg",
      },
      {
        nombre: "Shoulder Press Machine",
        series: 3,
        repeticiones: 10,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/primeros-pasos/Shoulder-Press-Machine-Gym.jpg",
      },
      {
        nombre: "Triceps Pushdown",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/define-zona-superior/Triceps-Pushdown-Gym.webp",
      },
    ],
  },
  "define-tu-zona-inferior": {
    slug: "define-tu-zona-inferior",
    titulo: "Define tu zona inferior",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 6,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Bike",
        duracion: "5'",
        recuperacion: "< 140 ppm",
        imagen: "/imagenes/planes/empieza-con-confianza/Bike-Gym.webp",
      },
      {
        nombre: "Leg Press",
        series: 3,
        repeticiones: 12,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Smith Machine Squat",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/full-body/Smith-Machine-Squat-Gym.jpg",
      },
      {
        nombre: "Knee Extension",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen: "/imagenes/planes/full-body/Knee-Extension-Gym.webp",
      },
      {
        nombre: "Leg Press (énfasis glúteo)",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Knee Extension (serie final)",
        series: 2,
        repeticiones: 15,
        recuperacion: "45 Seg",
        imagen:
          "/imagenes/planes/define-zona-inferior/Knee-Extension-Gym.webp",
      },
    ],
  },
  gluteos: {
    slug: "gluteos",
    titulo: "Glúteos",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 6,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Bike",
        duracion: "5'",
        recuperacion: "< 140 ppm",
        imagen: "/imagenes/planes/empieza-con-confianza/Bike-Gym.webp",
      },
      {
        nombre: "Leg Press (pies altos y anchos)",
        series: 4,
        repeticiones: 12,
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/primeros-pasos/Leg-Press-Gym.jpg",
      },
      {
        nombre: "Smith Machine Sumo Squat",
        series: 3,
        repeticiones: 10,
        recuperacion: "90 Seg",
        imagen:
          "/imagenes/planes/gluteos/Smith-Machine-Sumo-Squat-Gym.jpg",
      },
      {
        nombre: "Leg Press (a una pierna)",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/gluteos/Leg-Press-A-Una-Pierna-Gym.jpg",
      },
      {
        nombre: "Smith Machine Reverse Lunge",
        series: 3,
        repeticiones: 10,
        recuperacion: "60 Seg",
        imagen:
          "/imagenes/planes/gluteos/Smith-Machine-Reverse-Lunge-Gym.jpg",
      },
      {
        nombre: "Elliptic",
        duracion: "5'",
        recuperacion: "< 120 ppm",
        imagen:
          "/imagenes/planes/primeros-pasos/Elíptica946iExperiencie-.webp",
      },
    ],
  },
  "puesta-a-punto": {
    slug: "puesta-a-punto",
    titulo: "Puesta a punto",
    categoria: "RUNNING",
    banner: BANNER_PRIMEROS_PASOS,
    ejerciciosCount: 7,
    minutos: 60,
    ejercicios: [
      {
        nombre: "Caminata activa",
        duracion: "5'",
        recuperacion: "—",
        imagen: "/imagenes/planes/puesta-a-punto/caminata-activa.jpeg",
      },
      {
        nombre: "Trote suave",
        duracion: "15'",
        recuperacion: "< 140 ppm",
        imagen: "/imagenes/planes/puesta-a-punto/trote-suave.webp",
      },
      {
        nombre: "Aceleraciones",
        series: 6,
        distancia: "100 m",
        recuperacion: "90 Seg",
        imagen: "/imagenes/planes/puesta-a-punto/aceleraciones.jpeg",
      },
      {
        nombre: "Rodaje continuo",
        duracion: "20'",
        recuperacion: "Zona 2",
        imagen:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Talones al glúteo",
        series: 3,
        distancia: "30 m",
        recuperacion: "45 Seg",
        imagen: "/imagenes/planes/puesta-a-punto/tacones-al-gluteo.jpg",
      },
      {
        nombre: "Rodillas altas",
        series: 3,
        distancia: "30 m",
        recuperacion: "45 Seg",
        imagen: "/imagenes/planes/puesta-a-punto/rodillas-altas.webp",
      },
      {
        nombre: "Enfriamiento y estiramientos",
        duracion: "10'",
        recuperacion: "—",
        imagen:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e9b?auto=format&fit=crop&w=200&q=80",
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
