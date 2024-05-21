"use client";

import { updateMonster } from "@/app/api";
import { Button } from "@/components/ui/button";
import type { Monster } from "@/schemas/monster";
import { Star, StarOff } from "lucide-react";
import { toast } from "sonner";

interface Props {
  monster: Monster;
}

export const FavoriteButton = ({ monster }: Props) => {
  const handleFavorite = async (monster: Monster) => {
    monster.favorite = !monster.favorite;
    await updateMonster(monster.id, monster);
    monster.favorite
      ? toast.success("お気に入り追加しました")
      : toast.error("お気に入り削除しました");
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
