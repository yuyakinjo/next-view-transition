"use server";

import { fetchOptions } from "@/app/fetch-option";
import { MonsterSchema, type Monster } from "@/schemas/monster";
import { MonstersSchema } from "@/schemas/monsters";
import { UpdateMonsterSchema } from "@/schemas/update-monster";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const updateMonster = async (monster: Partial<Monster>) => {
  // validation
  const validated = UpdateMonsterSchema.safeParse(monster);
  if (!validated.success) {
    console.error(validated.error);
    return;
  }

  const validatedMonster = validated.data;

  const { monstersURL, options } = fetchOptions;

  // mutate
  try {
    const updateded = await fetch(`${monstersURL}/${validatedMonster.id}`, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(validatedMonster),
    })
      .then((res) => res.json())
      .then(UpdateMonsterSchema.safeParse);

    if (!updateded.success) {
      throw new Error("Failed to parse updated monster");
    }
  } catch (error) {
    console.error(error);
    return null;
  }

  // revalidate
  revalidatePath(`/detail/${monster.id}`);
  revalidatePath("/");

  // redirect
  redirect("/");
};
