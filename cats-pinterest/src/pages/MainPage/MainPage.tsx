import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";
import { useAllCats } from "../../entities/cats/model/hooks/useAllCats";

export function MainPage() {
  const { allCats, loading } = useAllCats();
  if (loading) return "Fetching cats data";
  if (allCats.length === 0) return "Data has not loaded";
  return <CatsList cats={allCats} />;
}
