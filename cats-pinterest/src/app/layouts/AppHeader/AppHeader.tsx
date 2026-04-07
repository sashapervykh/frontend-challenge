import { NavLink } from "react-router";
import styles from "./AppHeader.module.css";
import { ROUTES } from "../../../shared/constants/routes";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <NavLink to={ROUTES.MAIN} className={`${styles["nav-link"]} ${styles["nav-link__active"]}`}>
        Все котики
      </NavLink>
      <NavLink to={ROUTES.FAVORITES} className={styles["nav-link"]}>
        Любимые котики
      </NavLink>
    </header>
  );
}
