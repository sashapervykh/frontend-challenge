import { useEffect } from "react";
import { fetchCatsData } from "../../entities/cats/api/fetchCatsData";

export function MainPage() {
  useEffect(() => {
    fetchCatsData();
  }, []);
  return "Main Page";
}
