import z from "zod";
import type { catsListSchema } from "../schemas/catsListSchema";

export type CatsList = z.infer<typeof catsListSchema>;
