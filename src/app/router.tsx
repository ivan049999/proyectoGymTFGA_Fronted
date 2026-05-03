import { Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { SECTION_PLACEHOLDER_ROUTES } from "@/data/homeNav";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
        <Route path="valoranos" element={<ComingSoonPage title="Valóranos" />} />
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
