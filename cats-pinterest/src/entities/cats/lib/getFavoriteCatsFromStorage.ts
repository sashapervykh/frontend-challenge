import { STORAGE_KEYS } from "../../../shared/constants/storageKeys";
import { catsListSchema } from "../model/schemas/catsListSchema";
import type { CatsListType } from "../model/types/CatsListType";

export function getFavoriteCatsFromStorage(): CatsListType {
  try {
    const storedData = localStorage.getItem(STORAGE_KEYS.FAVORITE);
    if (storedData) {
      const storedObject = JSON.parse(storedData);
      const favorites = catsListSchema.parse(storedObject);
      return favorites;
    }
    return [];
  } catch {
    return [];
  }
}
