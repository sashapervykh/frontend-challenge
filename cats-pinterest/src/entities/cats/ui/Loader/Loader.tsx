import { TextMessage } from "../../../../shared/ui/TextMessage/TextMessage";
import type { CatsListType } from "../../model/types/CatsListType";

interface Props {
  cats: CatsListType;
}

export function LoadingMessage({ cats }: Props) {
  return (
    <>
      {cats.length ? (
        <TextMessage text={"... загружаем еще котиков ..."} />
      ) : (
        <TextMessage text={"... загружаем котиков для тебя..."} />
      )}
    </>
  );
}
