import { getMonster } from "@/app/api";
import { Detail } from "@/app/detail/[id]/components/detail";
import type { Monster } from "@/schemas/monster";
import { Suspense } from "react";

interface Props {
  params: { id: Monster["id"] };
}

export default async function Page({ params }: Props) {
  const monster = await getMonster(params.id);

  if (!monster) return <div>Monster not found</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Detail monster={monster} />
    </Suspense>
  );
}
