import { useCallback, useEffect, useRef, useState } from "react";
import type { CatsListType } from "../types/CatsListType";
import { fetchCatsData } from "../../api/fetchCatsData";

export function useAllCats() {
  const [allCats, setAllCats] = useState<CatsListType>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    async function getAllCats() {
      try {
        setLoading(true);
        const catsData = await fetchCatsData(page);
        if (catsData.length === 0) {
          setHasMore(false);
          return;
        }
        setAllCats((c) => [...c, ...catsData]);
      } catch {
        if (allCats.length === 0) {
          setError("Прозошла ошибка при загрузке котиков. Попробуй снова позже...");
          return;
        }
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }

    getAllCats();
  }, [page]);

  const sentinelRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) {
        return;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          setPage((p) => p + 1);
        }
      });
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [loading],
  );

  return { allCats, loading, sentinelRef, error, hasMore };
}
