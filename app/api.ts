"use server";

import type { monsters } from "@/db.json";

export const getMonsters = async () => {
  try {
    const monsters = await fetch("http:localhost:3001/monsters", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then<Monster[]>((res) => res.json());
    return monsters;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export type Monster = (typeof monsters)[number];

export const getMonsterByFavorite = async (favorite: boolean) => {
  const isFavorite = favorite ? 1 : 0;
  try {
    const monsters = await fetch(
      `http:localhost:3001/monsters?favorite=${isFavorite}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then<Monster[]>((res) => res.json());
    return monsters;
  } catch (error) {
    console.error(error);
    return [];
  }
};
