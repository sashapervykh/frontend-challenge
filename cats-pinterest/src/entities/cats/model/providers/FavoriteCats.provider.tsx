import { useEffect, useState, type ReactNode } from "react";

import type { CatsListType } from "../types/CatsListType";
import { getFavoriteCatsFromStorage } from "../../lib/getFavoriteCatsFromStorage";
import { STORAGE_KEYS } from "../../../../shared/constants/storageKeys";
import type { Cat } from "../types/Cat";
import { FavoriteCatsContext } from "../contexts/FavoriteCats.context";

interface Props {
  children: ReactNode;
}

export function FavoriteCatsProvider({ children }: Props) {
  const [favoriteCats, setFavoriteCats] = useState<CatsListType>(getFavoriteCatsFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITE, JSON.stringify(favoriteCats));
  }, [favoriteCats]);
  const addToFavorites = (cat: Cat) => {
    setFavoriteCats((c) => [...c, cat]);
  };
  const removeFromFavorites = (id: string) => {
    setFavoriteCats((c) => [...c.filter((cat) => cat.id !== id)]);
  };
  const checkIsFavorite = (id: string) => {
    return favoriteCats.some((cat) => cat.id === id);
  };
  const value = {
    favoriteCats,
    addToFavorites,
    removeFromFavorites,
    checkIsFavorite,
  };
  return <FavoriteCatsContext.Provider value={value}>{children}</FavoriteCatsContext.Provider>;
}
