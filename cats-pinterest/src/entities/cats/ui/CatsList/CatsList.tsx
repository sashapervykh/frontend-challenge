import type { CatsListType } from "../../model/types/CatsListType";
import { CatCard } from "../CatCard/CatCard";
import styles from "./CatsList.module.css";

interface Props {
  cats: CatsListType;
}

export function CatsList({ cats }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.list}>
        {cats.map((cat) => (
          <CatCard key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
}
