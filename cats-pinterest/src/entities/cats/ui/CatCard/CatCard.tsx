import { useState } from "react";
import type { Cat } from "../../model/types/Cat";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import styles from "./CatCard.module.css";

export function CatCard({ id, url }: Cat) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={`${styles.card} ${error ? styles.error : ""} ${loaded ? "" : styles.skeleton}`}>
      {error && <div className={styles["error-message"]}>Не удалось загрузить изображение...</div>}
      {!error && (
        <>
          <img
            className={styles.image}
            src={url}
            loading="lazy"
            alt={`Image of cat named ${id}`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
          />
          <FavoriteButton id={id} url={url} />
        </>
      )}
    </div>
  );
}
