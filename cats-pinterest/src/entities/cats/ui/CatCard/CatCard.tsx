import type { Cat } from "../../model/types/Cat";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import styles from "./CatCard.module.css";

export function CatCard({ id, url }: Cat) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={url} alt={`Image of cat named ${id}`} />
      <FavoriteButton id={id} url={url} />
    </div>
  );
}
