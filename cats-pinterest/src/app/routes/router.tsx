import { HashRouter, Navigate, Route, Routes } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import { FavoritesPage } from "../../pages/FavoritesPage/FavoritesPage";

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}
