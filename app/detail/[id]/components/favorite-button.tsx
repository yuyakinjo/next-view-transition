"use client";

import { updateMonster } from "@/app/api";
import { Button } from "@/components/ui/button";
import type { Monster } from "@/schemas/monster";
import { Star, StarOff } from "lucide-react";

interface Props {
  monster: Monster;
}

export const FavoriteButton = ({ monster }: Props) => {
  const handleFavorite = async (monster: Monster) => {
    monster.favorite = !monster.favorite;
    await updateMonster(monster.id, monster);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={async () => await handleFavorite(monster)}
    >
      {monster.favorite ? (
        <Star className="text-yellow-500" />
      ) : (
        <StarOff className="text-gray-500" />
      )}
    </Button>
  );
};
