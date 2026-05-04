import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { AuthError } from "@supabase/supabase-js";
import { useAuth } from "@/contexts/auth-context";
import { getSupabase } from "@/lib/supabaseClient";

function mapLoginAuthError(err: AuthError): string {
  const msg = err.message.toLowerCase();
  if (
    msg.includes("invalid login") ||
    msg.includes("invalid credentials") ||
    msg.includes("email not found")
  ) {
    return "Correo o contraseña incorrectos, o la cuenta no existe.";
  }
  if (msg.includes("confirm") && msg.includes("email")) {
    return "Debes confirmar el correo antes de iniciar sesión.";
  }
  if (msg.includes("email")) {
    return "Correo no válido o no permitido.";
  }
  return err.message || "No se pudo iniciar sesión.";
}

function isValidEmail(value: string): boolean {
  const v = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !password) {
      setError("Completa el correo y la contraseña.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError("Introduce un correo electrónico válido.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const supabase = getSupabase();
      const { data, error: authError } = await supabase.auth.signInWithPassword(
        {
          email: trimmed,
          password,
        }
      );

      if (authError) {
        setError(mapLoginAuthError(authError));
        return;
      }

      const sessionUser = data.user;
      const nameFromMeta =
        sessionUser?.user_metadata &&
        typeof sessionUser.user_metadata["name"] === "string"
          ? (sessionUser.user_metadata["name"] as string)
          : null;
      const displayName =
        nameFromMeta?.trim() ||
        (trimmed.includes("@")
          ? trimmed.slice(0, trimmed.indexOf("@"))
          : trimmed) ||
        "Usuario";

      login({ name: displayName || "Usuario" });
      navigate("/");
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Iniciar sesión</h2>
        <div className="login-field">
          <label className="login-label" htmlFor="login-email">
            Correo electrónico
          </label>
          <input
            id="login-email"
            className="login-input"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="login-field">
          <label className="login-label" htmlFor="login-password">
            Contraseña
          </label>
          <input
            id="login-password"
            className="login-input"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={1}
            disabled={loading}
          />
        </div>
        <p className="login-register-row">
          <Link to="/registro" className="login-register-link">
            ¿No tienes cuenta? Regístrate
          </Link>
        </p>
        {error ? <p className="login-form-error">{error}</p> : null}
        <button type="submit" className="login-submit" disabled={loading}>
          {loading ? "Iniciando sesión…" : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}
