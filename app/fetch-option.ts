import type { RequestInit } from "next/dist/server/web/spec-extension/request";

export const fetchOptions = {
  baseUrl: "http://localhost:3001",
  monstersURL: "http://localhost:3001/monsters",
  options: {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  } satisfies RequestInit,
};
