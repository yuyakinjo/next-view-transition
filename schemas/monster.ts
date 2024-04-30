import { z } from "zod";

export const MonsterSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  type: z.string(),
  hp: z.number(),
  attack: z.number(),
  defense: z.number(),
  speed: z.number(),
  favorite: z.boolean(),
  image: z.string(),
  specialAttack: z.number(),
  specialDeffense: z.number(),
  description: z.string(),
});

export type Monster = z.infer<typeof MonsterSchema>;
