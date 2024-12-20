"use server";

import { fetchOptions } from "@/app/fetch-option";
import { type Monster, MonsterSchema } from "@/schema/monster";
import { MonstersSchema } from "@/schema/monsters";
import { UpdateMonsterSchema } from "@/schema/update-monster";
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
    const monsters = await fetch(`${monstersURL}?favorite=${isFavorite}`, options)
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

export const createMonster = async (data: Monster) => {
  // validation
  const validated = MonsterSchema.safeParse(data);
  if (!validated.success) {
    console.error(validated.error);
    return validated;
  }

  const validatedMonster = validated.data;

  const { monstersURL, options } = fetchOptions;

  // mutate
  try {
    const created = await fetch(monstersURL, {
      ...options,
      method: "POST",
      body: JSON.stringify(validatedMonster),
    })
      .then((res) => res.json())
      .then(MonsterSchema.safeParse);

    if (!created.success) {
      throw new Error("Failed to parse created monster");
    }
  } catch (error) {
    console.error(error);
    return { success: false, data: null, error: "server error" };
  }

  // revalidate
  revalidatePath("/");

  // redirect
  redirect("/");
};
