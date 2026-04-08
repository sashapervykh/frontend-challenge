import { useEffect, useState } from "react";
import { fetchCatsData } from "../../entities/cats/api/fetchCatsData";
import type { CatsListType } from "../../entities/cats/model/types/CatsListType";
import { CatCard } from "../../entities/cats/ui/CatCard/CatCard";

export function MainPage() {
  const [catsList, setCatsList] = useState<CatsListType>([]);
  useEffect(() => {
    async function getCatsList() {
      const data = await fetchCatsData();
      setCatsList(data);
    }
    getCatsList();
  }, []);
  if (catsList.length === 0) return "Data has not loaded";
  return (
    <section>
      {catsList.map((cat) => (
        <CatCard key={cat.id} {...cat} />
      ))}
    </section>
  );
}
