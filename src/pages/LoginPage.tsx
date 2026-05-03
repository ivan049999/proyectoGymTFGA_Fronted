import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !password) return;

    const displayName = trimmed.includes("@")
      ? trimmed.slice(0, trimmed.indexOf("@"))
      : trimmed;
    login({ name: displayName || "Usuario" });
    navigate("/");
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
          />
        </div>
        <p className="login-register-row">
          <Link to="/registro" className="login-register-link">
            ¿No tienes cuenta? Regístrate
          </Link>
        </p>
        <button type="submit" className="login-submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
