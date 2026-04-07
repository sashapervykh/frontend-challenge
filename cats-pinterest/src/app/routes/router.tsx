import { HashRouter, Navigate, Route, Routes } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import { FavoritesPage } from "../../pages/FavoritesPage/FavoritesPage";
import { AppLayout } from "../layouts/AppLayout";
import { ROUTES } from "../../shared/constants/routes";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}
