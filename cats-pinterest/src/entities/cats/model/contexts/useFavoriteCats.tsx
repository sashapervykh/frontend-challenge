import { useContext } from "react";
import { FavoriteCatsContext } from "./FavroriteCats.context";

export function useFavoriteCats() {
  const context = useContext(FavoriteCatsContext);
  if (!context) {
    throw new Error("FavoritesCatsContext should be used inside respective provider!");
  }
  return context;
}
