import { HashRouter, Navigate, Route, Routes } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import { FavoritesPage } from "../../pages/FavoritesPage/FavoritesPage";
import { AppLayout } from "../layouts/AppLayouts";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}
