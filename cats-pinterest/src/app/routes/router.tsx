import { createHashRouter, RouterProvider, Navigate } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";
import { FavoritesPage } from "../../pages/FavoritesPage/FavoritesPage";
import { AppLayout } from "../layouts/AppLayout/AppLayout";
import { ROUTES } from "../../shared/constants/routes";

const router = createHashRouter([
  {
    path: ROUTES.MAIN,
    element: (
      <>
        <AppLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
