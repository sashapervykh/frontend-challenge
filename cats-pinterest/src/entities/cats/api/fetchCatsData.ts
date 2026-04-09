import { catsListSchema } from "../model/schemas/catsListSchema";
import { mockedData } from "./mockedData";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

export async function fetchCatsData() {
  // const response = await fetch(
  //   `${url}?size=med&mime_types=jpg&format=json&order=ASC&page=0&limit=30`,
  //   { method: "GET", headers: { "Content-Type": "application/json", "x-api-key": key } },
  // );
  // const data = await response.json();
  const data = mockedData;
  const typedData = catsListSchema.parse(data);
  console.log(typedData);
  return typedData;
}
