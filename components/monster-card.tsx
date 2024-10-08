import { FavoriteButton } from "@/app/detail/[id]/components/favorite-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Monster } from "@/schema/monster";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface Props {
  monster: Monster;
}

export const MonsterCard = ({ monster }: Props) => {
  return (
    <Card key={monster.id}>
      <CardHeader>
        <FavoriteButton monster={monster} />
      </CardHeader>
      <Link href={`/detail/${monster.id}`}>
        <CardContent className="flex flex-col items-center p-3">
          <Image
            alt="denkinezumi"
            className="rounded-full"
            height={100}
            src={monster.image}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            priority={false}
            width={100}
          />
          <h3 className="text-lg font-bold mt-2">{monster.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <Badge className="px-2 py-1" variant="outline">
              {monster.type}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">HP</span>
              <span className="text-lg font-bold">{monster.hp}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Attack</span>
              <span className="text-lg font-bold">{monster.attack}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Defense</span>
              <span className="text-lg font-bold">{monster.defense}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Speed</span>
              <span className="text-lg font-bold">{monster.speed}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
