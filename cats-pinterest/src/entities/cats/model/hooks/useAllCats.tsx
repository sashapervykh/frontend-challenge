import { useEffect, useState } from "react";
import type { CatsListType } from "../types/CatsListType";
import { fetchCatsData } from "../../api/fetchCatsData";

export function useAllCats() {
  const [allCats, setAllCats] = useState<CatsListType>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAllCats() {
      try {
        setLoading(true);
        const catsData = await fetchCatsData();
        setAllCats(catsData);
      } catch {
        console.error("No data received");
      } finally {
        setLoading(false);
      }
    }

    getAllCats();
  }, []);

  return { allCats, loading };
}
