import { NavLink } from "react-router";
import styles from "./NavAppLink.module.css";

interface Props {
  text: string;
  to: string;
}

export function NavAppLink({ text, to }: Props) {
  const notActiveStyle = styles["nav-link"];
  const activeStyle = `${styles["nav-link"]} ${styles["nav-link__active"]}`;
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}>
      {text}
    </NavLink>
  );
}
