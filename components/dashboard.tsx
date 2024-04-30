/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kcaPkFqyNjH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { getMonsters } from "@/app/api";
import { Button } from "@/components/ui/button";
import { MonsterCard } from "./monster-card";

export async function Dashboard() {
  const monsters = await getMonsters();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pokemon Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant={"secondary"}>Transition</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-bold mb-4">All Monsters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {monsters.map((monster) => (
              <MonsterCard monster={monster} key={monster.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
