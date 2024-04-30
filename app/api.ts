"use server";

import { unstable_noStore } from "next/cache";
import { MonsterListSchema, MonsterSchema } from "./schema/monster";

const API_URL = "http://localhost:3001";
const MONSTERS_URL = `${API_URL}/monsters`;
const fetchOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export const getMonsters = async () => {
  try {
    const monsters = await fetch(MONSTERS_URL, fetchOptions)
      .then((res) => res.json())
      .then(MonsterListSchema.safeParse);

    if (!monsters.success) {
      throw new Error("Failed to parse monsters");
    }

    return monsters.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMonster = async (id: string) => {
  unstable_noStore();
  try {
    const monster = await fetch(`${MONSTERS_URL}/${id}`, fetchOptions)
      .then((res) => res.json())
      .then(MonsterSchema.safeParse);

    if (!monster.success) {
      throw new Error("Failed to parse monster");
    }

    return monster.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMonsterByFavorite = async (favorite: boolean) => {
  const isFavorite = favorite ? 1 : 0;
  try {
    const monsters = await fetch(
      `${MONSTERS_URL}?favorite=${isFavorite}`,
      fetchOptions
    )
      .then((res) => res.json())
      .then(MonsterListSchema.safeParse);

    if (!monsters.success) {
      throw new Error("Failed to parse monsters");
    }

    return monsters.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
