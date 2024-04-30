"use server";

import { MonsterSchema, type Monster } from "@/schemas/monster";
import { revalidatePath } from "next/cache";
import { MonstersSchema } from "../schemas/monsters";
import { fetchOptions } from "./fetch-option";

export const getMonsters = async () => {
  const { monstersURL, options } = fetchOptions;
  try {
    const monsters = await fetch(monstersURL, options)
      .then((res) => res.json())
      .then(MonstersSchema.safeParse);

    if (!monsters.success) {
      throw new Error("Failed to parse monsters");
    }

    return monsters.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMonster = async (id: number) => {
  const { monstersURL, options } = fetchOptions;
  try {
    const monster = await fetch(`${monstersURL}/${id}`, options)
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
  const { monstersURL, options } = fetchOptions;
  const isFavorite = favorite ? 1 : 0;
  try {
    const monsters = await fetch(
      `${monstersURL}?favorite=${isFavorite}`,
      options
    )
      .then((res) => res.json())
      .then(MonstersSchema.safeParse);

    if (!monsters.success) {
      throw new Error("Failed to parse monsters");
    }

    return monsters.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateMonster = async (id: number, monster: Partial<Monster>) => {
  const { monstersURL, options } = fetchOptions;

  try {
    const updateded = await fetch(`${monstersURL}/${id}`, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(monster),
    })
      .then((res) => res.json())
      .then(MonsterSchema.safeParse);

    if (!updateded.success) {
      throw new Error("Failed to parse updated monster");
    }

    revalidatePath(`/detail/${id}`);
    revalidatePath("/");

    return updateded.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
