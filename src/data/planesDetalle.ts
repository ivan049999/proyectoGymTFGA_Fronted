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
          "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Leg Press",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "https://images.unsplash.com/photo-1534438327276-d14a1e6a8f4d?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Chest Press Machine",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Lat Pulldown",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "https://images.unsplash.com/photo-1603287681836-eb0dbcd831a5?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Shoulder Press Machine",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "https://images.unsplash.com/photo-1574680096145-d05b474e3a91?auto=format&fit=crop&w=200&q=80",
      },
      {
        nombre: "Seated Row",
        series: 3,
        repeticiones: 12,
        recuperacion: "60 Seg",
        imagen:
          "https://images.unsplash.com/photo-1549060275-afa3b7200c19?auto=format&fit=crop&w=200&q=80",
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
