import { useContext } from "react";
import { AllCatsContext } from "../contexts/AllCats.context";

export function useAllCatsContext() {
  const context = useContext(AllCatsContext);
  if (!context) {
    throw new Error("AllCatsContext should be used inside respective provider!");
  }
  return context;
}
