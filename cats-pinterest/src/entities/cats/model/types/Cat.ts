import z from "zod";
import type { catSchema } from "../schemas/catSchema";

export type CatsList = z.infer<typeof catSchema>;
