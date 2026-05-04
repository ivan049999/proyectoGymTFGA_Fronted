const BANNER_PLANES =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80";
const BANNER_FUNCTIONAL =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80";

const BANNERS = [
  { title: "Planes de entrenamiento", bg: BANNER_PLANES },
  { title: "Functional Workout", bg: BANNER_FUNCTIONAL },
] as const;

export function EntrenamientosPage() {
  return (
    <div className="entrenamientos-page">
      <div className="entrenamientos-banners" role="list">
        {BANNERS.map(({ title, bg }) => (
          <article
            key={title}
            className="entrenamientos-banner"
            role="listitem"
            aria-label={title}
          >
            <div
              className="entrenamientos-banner__bg"
              style={{ backgroundImage: `url(${bg})` }}
            />
            <div className="entrenamientos-banner__overlay" aria-hidden />
            <div className="entrenamientos-banner__content">
              <h2 className="entrenamientos-banner__title">{title}</h2>
              <div className="entrenamientos-banner__accent" aria-hidden />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
