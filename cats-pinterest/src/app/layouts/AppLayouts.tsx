import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <>
      <header>Nav Buttons</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
