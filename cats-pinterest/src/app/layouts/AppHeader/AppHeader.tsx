import styles from "./AppHeader.module.css";
import { ROUTES } from "../../../shared/constants/routes";
import { NavAppLink } from "../NavAppLink/NavAppLink";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <NavAppLink to={ROUTES.MAIN} text="Все котики" />
      <NavAppLink to={ROUTES.FAVORITES} text="Любимые котики" />
    </header>
  );
}
