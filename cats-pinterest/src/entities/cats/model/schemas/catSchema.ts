import z from "zod";

export const catSchema = z.object({ id: z.string(), url: z.string() });
