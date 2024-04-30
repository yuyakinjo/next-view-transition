import type { Monster } from "@/app/api";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import BuiltInLink from "next/link";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface Props {
  monster: Monster;
}

export function Detail({ monster }: Props) {
  const hasPrevious = Number(monster.id) - 1 > 0;
  const hasNext = Number(monster.id) + 1 <= 4;

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4">
        <Image
          alt="detail"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src={monster.image}
          width={600}
        />
        <div className="flex justify-between items-center">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            href={`/detail/${Number(monster.id) - 1}`}
          >
            {hasPrevious && (
              <>
                <ChevronLeftIcon className="size-4" />
                前へ
              </>
            )}
          </Link>

          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            href={`/detail/${Number(monster.id) + 1}`}
          >
            {hasNext && (
              <>
                次へ
                <ChevronRightIcon className="size-4" />
              </>
            )}
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">{monster.name}</h1>
          <div className="flex items-center gap-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
              {monster.type}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                HP
              </span>
              <span className="font-medium">{monster.hp}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Attack
              </span>
              <span className="font-medium">{monster.attack}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Defense
              </span>
              <span className="font-medium">{monster.defense}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Special Attack
              </span>
              <span className="font-medium">{monster.specialAttack}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Special Defense
              </span>
              <span className="font-medium">{monster.specialDeffense}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Speed
              </span>
              <span className="font-medium">{monster.speed}</span>
            </div>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {monster.description}
            </p>
          </div>
        </div>
        <Link href={"/"}>Homeへ</Link>
      </div>
    </div>
  );
}
