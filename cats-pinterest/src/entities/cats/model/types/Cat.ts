import z from "zod";
import type { catSchema } from "../schemas/catSchema";

export type Cat = z.infer<typeof catSchema>;
