"use server";

import { fetchOptions } from "./fetch-option";
import { MonsterListSchema, MonsterSchema } from "./schema/monster";

export const getMonsters = async () => {
  const { monstersURL, options } = fetchOptions;
  try {
    const monsters = await fetch(monstersURL, options)
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
