import { NavLink } from "react-router";
import styles from "./NavAppLink.module.css";

interface Props {
  text: string;
  to: string;
}

export function NavAppLink({ text, to }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles["nav-link"]} ${isActive ? styles["nav-link__active"] : ""}`
      }
    >
      {text}
    </NavLink>
  );
}
