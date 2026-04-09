import { CatsList } from "../../entities/cats/ui/CatsList/CatsList";
import { useAllCats } from "../../entities/cats/model/hooks/useAllCats";
import { TextMessage } from "../../shared/ui/TextMessage/TextMessage";
import { LoadingMessage } from "../../entities/cats/ui/LoadingMessage/LoadingMessage";

export function MainPage() {
  const { allCats, loading, sentinelRef, error, hasMore } = useAllCats();

  if (error) {
    return <TextMessage text={error} />;
  }
  return (
    <>
      <CatsList cats={allCats} />
      {loading && <LoadingMessage cats={allCats} />}
      {hasMore && <div ref={sentinelRef} />}
      {!hasMore && <TextMessage text={"Котики закончились(((("} />}
    </>
  );
}
