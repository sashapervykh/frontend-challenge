import { createContext } from "react";
import type { AllCatsContextType } from "../types/AllCatsContextType";

export const AllCatsContext = createContext<AllCatsContextType | undefined>(undefined);
