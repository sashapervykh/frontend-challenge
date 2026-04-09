import { useFavoriteCats } from "../../entities/cats/model/hooks/useFavoriteCats";
import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";

export function FavoritesPage() {
  const { favoriteCats } = useFavoriteCats();
  if (!favoriteCats.length) {
    return "No cats were added to favorites!";
  }
  return <CatsList cats={favoriteCats} />;
}
