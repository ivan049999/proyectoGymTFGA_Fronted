import { Link } from "react-router-dom";

const BANNER_PLANES =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80";
const BANNER_FUNCTIONAL =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80";

type EntrenamientoBanner = {
  title: string;
  bg: string;
  to?: string;
};

const BANNERS: EntrenamientoBanner[] = [
  { title: "Planes de entrenamiento", bg: BANNER_PLANES, to: "/entrenamientos/planes" },
  { title: "Functional Workout", bg: BANNER_FUNCTIONAL },
];

function BannerContent({ title, bg }: { title: string; bg: string }) {
  return (
    <>
      <div
        className="entrenamientos-banner__bg"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="entrenamientos-banner__overlay" aria-hidden />
      <div className="entrenamientos-banner__content">
        <h2 className="entrenamientos-banner__title">{title}</h2>
        <div className="entrenamientos-banner__accent" aria-hidden />
      </div>
    </>
  );
}

export function EntrenamientosPage() {
  return (
    <div className="entrenamientos-page">
      <div className="entrenamientos-banners" role="list">
        {BANNERS.map(({ title, bg, to }) => {
          if (to) {
            return (
              <Link
                key={title}
                to={to}
                className="entrenamientos-banner entrenamientos-banner--link"
                role="listitem"
                aria-label={title}
              >
                <BannerContent title={title} bg={bg} />
              </Link>
            );
          }

          return (
            <article
              key={title}
              className="entrenamientos-banner"
              role="listitem"
              aria-label={title}
            >
              <BannerContent title={title} bg={bg} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
