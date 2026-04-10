import z from "zod";
import type { catsListSchema } from "../schemas/catsListSchema";

export type CatsListType = z.infer<typeof catsListSchema>;
