import { MonsterSchema } from "@/schema/monster";
import { z } from "zod";

export const MonstersSchema = z.array(MonsterSchema);
export type Monsters = z.infer<typeof MonstersSchema>;
