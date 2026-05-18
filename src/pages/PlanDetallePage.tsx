import { Navigate, useParams } from "react-router-dom";
import { getPlanDetalle } from "@/data/planesDetalle";
import type { EjercicioPlan } from "@/data/planesDetalle";

function NikeSwooshIcon() {
  return (
    <svg
      className="plan-detalle-hero__nike"
      viewBox="0 0 69 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M68.56 2.48C55.13 9.13 39.2 17.6 24.5 22.5 12.1 26.3 4.2 23.4 1.1 18.2-.8 14.5-.5 9.8 2.8 6.1c2.8-3.2 7.5-5.4 13.2-6.1 5.2-.6 11.3.2 18.4 2.8 7.8 2.9 14.5 4.5 20.1 4.8 5.2.3 9.8-.5 13.8-2.4 4.3-2 7.8-4.8 10.5-7.6l2.8-2.2z" />
    </svg>
  );
}

function EjercicioDetalles({ ejercicio }: { ejercicio: EjercicioPlan }) {
  const lineas: string[] = [];

  if (ejercicio.duracion) {
    lineas.push(`Duración: ${ejercicio.duracion}`);
  }
  if (ejercicio.series != null) {
    lineas.push(`Series: ${ejercicio.series}`);
  }
  if (ejercicio.distancia) {
    lineas.push(`Distancia: ${ejercicio.distancia}`);
  }
  if (ejercicio.repeticiones != null) {
    lineas.push(`Repeticiones: ${ejercicio.repeticiones}`);
  }
  lineas.push(`Recuperación: ${ejercicio.recuperacion}`);

  return (
    <>
      {lineas.map((linea) => (
        <p key={linea} className="plan-detalle-ejercicio__meta">
          {linea}
        </p>
      ))}
    </>
  );
}

export function PlanDetallePage() {
  const { slug } = useParams<{ slug: string }>();
  const plan = slug ? getPlanDetalle(slug) : undefined;

  if (!plan) {
    return <Navigate to="/entrenamientos/planes" replace />;
  }

  return (
    <div className="plan-detalle-page">
      <section className="plan-detalle-hero" aria-label={plan.titulo}>
        <img
          src={plan.banner}
          alt=""
          className="plan-detalle-hero__img"
        />
        <div className="plan-detalle-hero__overlay" aria-hidden />
        <div className="plan-detalle-hero__content">
          <h2 className="plan-detalle-hero__title">{plan.titulo}</h2>
          {plan.categoria ? (
            <p className="plan-detalle-hero__categoria">{plan.categoria}</p>
          ) : null}
          <div className="plan-detalle-hero__stats">
            <div className="plan-detalle-hero__stat">
              <NikeSwooshIcon />
              <span className="plan-detalle-hero__stat-value">
                {plan.ejerciciosCount}
              </span>
              <span className="plan-detalle-hero__stat-label">Ejercicios</span>
            </div>
            <div className="plan-detalle-hero__stat plan-detalle-hero__stat--minutos">
              <span className="plan-detalle-hero__stat-value">
                {plan.minutos}&apos;
              </span>
              <span className="plan-detalle-hero__stat-label">Minutos</span>
            </div>
          </div>
        </div>
      </section>

      <ul className="plan-detalle-ejercicios">
        {plan.ejercicios.map((ejercicio) => (
          <li key={ejercicio.nombre} className="plan-detalle-ejercicio">
            <div className="plan-detalle-ejercicio__info">
              <h3 className="plan-detalle-ejercicio__nombre">{ejercicio.nombre}</h3>
              <EjercicioDetalles ejercicio={ejercicio} />
            </div>
            <img
              src={ejercicio.imagen}
              alt=""
              className="plan-detalle-ejercicio__thumb"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
