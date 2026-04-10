import { Outlet, ScrollRestoration } from "react-router";
import { AppHeader } from "../AppHeader/AppHeader";
import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <>
      <ScrollRestoration />
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
