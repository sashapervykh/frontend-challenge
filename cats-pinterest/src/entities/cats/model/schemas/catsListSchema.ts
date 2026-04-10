import z from "zod";
import { catSchema } from "./catSchema";

export const catsListSchema = z.array(catSchema);
