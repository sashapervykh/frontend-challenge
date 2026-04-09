import { useFavoriteCats } from "../../entities/cats/model/hooks/useFavoriteCats";
import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";
import { TextMessage } from "../../shared/ui/TextMessage/TextMessage";

export function FavoritesPage() {
  const { favoriteCats } = useFavoriteCats();
  if (!favoriteCats.length) {
    return <TextMessage text={"Нет избранных котиков 😿"} />;
  }
  return <CatsList cats={favoriteCats} />;
}
