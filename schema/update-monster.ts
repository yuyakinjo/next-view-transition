import { MonsterSchema } from "./monster";

export const UpdateMonsterSchema = MonsterSchema.partial().required({
  id: true,
});
