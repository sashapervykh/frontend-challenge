import type { Cat } from "./Cat";
import type { CatsListType } from "./CatsListType";

export interface FavoriteCatsContextType {
  favoriteCats: CatsListType;
  addToFavorites: (cat: Cat) => void;
  removeFromFavorites: (id: string) => void;
  checkIsFavorite: (id: string) => boolean;
}
