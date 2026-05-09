import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import { getSupabase } from "@/lib/supabaseClient";

type ReviewRow = {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  user_id: string;
  profiles?: {
    full_name: string | null;
    avatar_url: string | null;
  }[] | null;
};

function clampRating(value: number): number {
  if (!Number.isFinite(value)) return 5;
  return Math.min(5, Math.max(1, Math.round(value)));
}

function formatDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "2-digit" });
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`valoranos-star${filled ? " valoranos-star--filled" : ""}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6L12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const r = clampRating(rating);
  return (
    <div className="valoranos-stars" aria-label={`${r} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= r} />
      ))}
    </div>
  );
}

function StarsPicker({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (next: number) => void;
  disabled?: boolean;
}) {
  return (
    <div className="valoranos-stars valoranos-stars--picker" role="radiogroup" aria-label="Tu valoración">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          className={`valoranos-star-btn${i <= value ? " valoranos-star-btn--on" : ""}`}
          onClick={() => onChange(i)}
          disabled={disabled}
          role="radio"
          aria-checked={i === value}
          aria-label={`${i} estrella${i === 1 ? "" : "s"}`}
        >
          <Star filled={i <= value} />
        </button>
      ))}
    </div>
  );
}

export function ValoranosPage() {
  const supabase = useMemo(() => getSupabase(), []);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState<ReviewRow[]>([]);

  const [myRating, setMyRating] = useState(5);
  const [myComment, setMyComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const stats = useMemo(() => {
    if (reviews.length === 0) return { avg: 0, count: 0 };
    const total = reviews.reduce((acc, r) => acc + clampRating(Number(r.rating)), 0);
    return { avg: total / reviews.length, count: reviews.length };
  }, [reviews]);

  async function load() {
    setError("");
    setLoading(true);
    try {
      const { data: userRes } = await supabase.auth.getUser();
      setUser(userRes.user ?? null);

      const { data, error: dbError } = await supabase
        .from("valoraciones")
        .select(
          `
          id,
          rating,
          comment,
          created_at,
          user_id,
          profiles (
            full_name,
            avatar_url
          )
        `
        )
        .order("created_at", { ascending: false })
        .limit(30);

      if (dbError) throw dbError;
      setReviews((data ?? []) as unknown as ReviewRow[]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg || "No se pudieron cargar las valoraciones.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => data.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    const current = (await supabase.auth.getUser()).data.user;
    if (!current) {
      setSubmitError("Debes iniciar sesión para publicar una valoración.");
      return;
    }
    const comment = myComment.trim();
    if (!comment) {
      setSubmitError("Escribe un comentario para enviar tu valoración.");
      return;
    }

    setSubmitting(true);
    try {
      const { error: insertError } = await supabase.from("valoraciones").insert({
        user_id: current.id,
        rating: clampRating(myRating),
        comment,
      });
      if (insertError) throw insertError;
      setMyRating(5);
      setMyComment("");
      await load();
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setSubmitError(msg || "No se pudo enviar la valoración.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="valoranos-page">
      <header className="valoranos-hero">
        <p className="valoranos-hero__kicker">Tu opinión nos importa</p>
        <h1 className="valoranos-hero__title">Valóranos</h1>
        <p className="valoranos-hero__subtitle">
          Ayuda a otros usuarios a elegir. Las reseñas publicadas pertenecen a usuarios registrados.
        </p>
      </header>

      <section className="valoranos-panel valoranos-panel--stats" aria-label="Resumen">
        <div className="valoranos-stats">
          <div className="valoranos-stats__score">
            <span className="valoranos-stats__avg">
              {stats.count ? stats.avg.toFixed(1) : "—"}
            </span>
            <Stars rating={stats.count ? Math.round(stats.avg) : 0} />
            <span className="valoranos-stats__count">
              {stats.count === 0
                ? "Aún no hay valoraciones"
                : `${stats.count} valoración${stats.count === 1 ? "" : "es"}`}
            </span>
          </div>
          <button
            type="button"
            className="valoranos-refresh"
            onClick={() => void load()}
            disabled={loading}
          >
            {loading ? "Cargando…" : "Actualizar"}
          </button>
        </div>
        {error ? <p className="valoranos-error">{error}</p> : null}
      </section>

      <section className="valoranos-panel" aria-label="Publicar reseña">
        {user ? (
          <form className="valoranos-form" onSubmit={handleSubmit}>
            <div className="valoranos-form__row">
              <p className="valoranos-form__label">Tu puntuación</p>
              <StarsPicker value={myRating} onChange={setMyRating} disabled={submitting} />
            </div>
            <div className="valoranos-form__row">
              <label className="valoranos-form__label" htmlFor="valoranos-comment">
                Tu reseña
              </label>
              <textarea
                id="valoranos-comment"
                className="valoranos-textarea"
                value={myComment}
                onChange={(ev) => setMyComment(ev.target.value)}
                placeholder="¿Qué te ha gustado? ¿Qué mejorarías?"
                disabled={submitting}
                rows={4}
              />
            </div>
            {submitError ? <p className="valoranos-error">{submitError}</p> : null}
            <button type="submit" className="valoranos-submit" disabled={submitting}>
              {submitting ? "Enviando…" : "Publicar valoración"}
            </button>
          </form>
        ) : (
          <div className="valoranos-cta">
            <p className="valoranos-cta__text">
              ¿Quieres dejar tu valoración? Inicia sesión para publicar tu reseña.
            </p>
            <Link className="valoranos-cta__btn" to="/login">
              Iniciar sesión
            </Link>
          </div>
        )}
      </section>

      <section className="valoranos-panel" aria-label="Reseñas de usuarios">
        <h2 className="valoranos-list-title">Reseñas recientes</h2>

        {loading ? (
          <p className="valoranos-muted">Cargando reseñas…</p>
        ) : reviews.length === 0 ? (
          <p className="valoranos-muted">Sé el primero en dejar una valoración.</p>
        ) : (
          <div className="valoranos-list">
            {reviews.map((r) => {
              const profile = r.profiles?.[0] ?? null;
              const name =
                profile?.full_name?.trim() ||
                (r.user_id ? `Usuario ${r.user_id.slice(0, 6)}` : "Usuario");
              return (
                <article key={r.id} className="valoranos-card">
                  <header className="valoranos-card__header">
                    <div className="valoranos-card__avatar" aria-hidden>
                      {name.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="valoranos-card__meta">
                      <p className="valoranos-card__name">{name}</p>
                      <div className="valoranos-card__sub">
                        <Stars rating={Number(r.rating)} />
                        <span className="valoranos-card__date">{formatDate(r.created_at)}</span>
                      </div>
                    </div>
                  </header>
                  <p className="valoranos-card__comment">{r.comment}</p>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

