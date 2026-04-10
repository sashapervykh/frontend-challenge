import type { CatsListType } from "./CatsListType";

export interface AllCatsContextType {
  allCats: CatsListType;
  loading: boolean;
  sentinelRef: (node: HTMLElement | null) => void;
  error: string | null;
  hasMore: boolean;
}
