import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !password) return;
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    navigate("/login");
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Registrarse</h2>
        <div className="login-field">
          <label className="login-label" htmlFor="register-email">
            Correo electrónico
          </label>
          <input
            id="register-email"
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
          <label className="login-label" htmlFor="register-password">
            Contraseña
          </label>
          <input
            id="register-password"
            className="login-input"
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div className="login-field">
          <label className="login-label" htmlFor="register-confirm">
            Confirmar contraseña
          </label>
          <input
            id="register-confirm"
            className="login-input"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <p className="login-register-row">
          <Link to="/login" className="login-register-link">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </p>
        {error ? <p className="login-form-error">{error}</p> : null}
        <button type="submit" className="login-submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
