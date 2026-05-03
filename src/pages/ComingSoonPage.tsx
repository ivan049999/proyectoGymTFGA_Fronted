import { Link } from "react-router-dom";

type ComingSoonPageProps = {
  title: string;
};

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="coming-soon-page">
      <h1 className="coming-soon-page__title">{title}</h1>
      <p className="coming-soon-page__text">Contenido disponible próximamente.</p>
      <Link className="coming-soon-page__back" to="/">
        Volver al inicio
      </Link>
    </div>
  );
}
