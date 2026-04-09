import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";
import { useAllCats } from "../../entities/cats/model/hooks/useAllCats";
import { TextMessage } from "../../shared/ui/TextMessage/TextMessage";

export function MainPage() {
  const { allCats, loading } = useAllCats();
  if (loading) {
    return <TextMessage text={"... загружаем котиков для тебя ..."} />;
  }
  if (allCats.length === 0) {
    return <TextMessage text={"Не удалось загрузить котиков. Попробуй еще раз позднее..."} />;
  }
  return <CatsList cats={allCats} />;
}
