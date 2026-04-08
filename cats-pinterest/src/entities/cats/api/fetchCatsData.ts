import { catsListSchema } from "../model/schemas/catsListSchema";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

export async function fetchCatsData() {
  try {
    const response = await fetch(
      `${url}?size=med&mime_types=jpg&format=json&order=ASC&page=0&limit=30`,
      { method: "GET", headers: { "Content-Type": "application/json", "x-api-key": key } },
    );
    const data = await response.json();
    const typedData = catsListSchema.parse(data);
    console.log(typedData);
    return typedData;
  } catch (err) {
    console.log(err);
  }
}
