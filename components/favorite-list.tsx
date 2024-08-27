import type { Monster } from "@/schema/monster";
import { MonsterCard } from "./monster-card";

interface Props {
  monsters: Monster[];
}

export const FavoriteList = ({ monsters }: Props) => {
  if (!monsters.length) return null;
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3">
      <h2 className="text-xl font-bold mb-4">Favorite Monsters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {monsters
          .filter((monster) => monster.favorite)
          .map((monster) => (
            <MonsterCard monster={monster} key={monster.id} />
          ))}
      </div>
    </div>
  );
};
