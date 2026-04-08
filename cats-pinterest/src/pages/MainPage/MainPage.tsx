import { useEffect, useState } from "react";
import { fetchCatsData } from "../../entities/cats/api/fetchCatsData";
import type { CatsListType } from "../../entities/cats/model/types/CatsListType";
import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";

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
  return <CatsList cats={catsList} />;
}
