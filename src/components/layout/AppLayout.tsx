import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function AppLayout() {
  const pathname = useLocation().pathname;
  const isDarkMain = pathname === "/" || pathname === "/login" || pathname === "/registro";
  const isEntrenamientos = pathname === "/entrenamientos";

  return (
    <div className="app-shell">
      <Header />
      <main
        className={
          isDarkMain
            ? "app-main app-main--home"
            : isEntrenamientos
              ? "app-main app-main--entrenamientos"
              : "app-main"
        }
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
