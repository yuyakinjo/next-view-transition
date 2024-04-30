import { MonsterSchema } from "@/schemas/monster";
import { z } from "zod";

export const MonstersSchema = z.array(MonsterSchema);
export type Monsters = z.infer<typeof MonstersSchema>;
