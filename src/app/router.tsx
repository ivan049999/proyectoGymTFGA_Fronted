import { Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { SECTION_PLACEHOLDER_ROUTES } from "@/data/homeNav";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";
import { EntrenamientosPage } from "@/pages/EntrenamientosPage";
import { PlanesEntrenamientoPage } from "@/pages/PlanesEntrenamientoPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ValoranosPage } from "@/pages/ValoranosPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
        <Route path="valoranos" element={<ValoranosPage />} />
        <Route path="entrenamientos" element={<EntrenamientosPage />} />
        <Route path="entrenamientos/planes" element={<PlanesEntrenamientoPage />} />
        {SECTION_PLACEHOLDER_ROUTES.map(({ to, label }) => {
          const path = to.replace(/^\//, "");
          return (
            <Route key={to} path={path} element={<ComingSoonPage title={label} />} />
          );
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
