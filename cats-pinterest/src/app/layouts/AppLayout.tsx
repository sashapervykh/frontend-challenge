import { Outlet } from "react-router";
import { AppHeader } from "./AppHeader/AppHeader";

export function AppLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
