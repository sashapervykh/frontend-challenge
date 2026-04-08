import { Outlet } from "react-router";
import { AppHeader } from "../AppHeader/AppHeader";
import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
