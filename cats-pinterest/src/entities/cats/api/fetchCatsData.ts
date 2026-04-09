import { catsListSchema } from "../model/schemas/catsListSchema";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

export async function fetchCatsData(page: number) {
  console.log(page);
  const response = await fetch(
    `${url}?size=med&mime_types=jpg&format=json&order=ASC&limit=30&page=${page}`,
    { method: "GET", headers: { "Content-Type": "application/json", "x-api-key": key } },
  );
  const data = await response.json();
  const typedData = catsListSchema.parse(data);
  return typedData;
}
