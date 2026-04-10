import { createContext } from "react";
import type { FavoriteCatsContextType } from "../types/FavoriteCatsContextType";

export const FavoriteCatsContext = createContext<FavoriteCatsContextType | undefined>(undefined);
