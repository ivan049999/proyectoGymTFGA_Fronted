import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function AppLayout() {
  const isHome = useLocation().pathname === "/";

  return (
    <div className="app-shell">
      <Header />
      <main className={isHome ? "app-main app-main--home" : "app-main"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
