export function Detail() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4">
        <img
          alt="detail"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src="/placeholder.svg"
          width={600}
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">Pikachu</h1>
          <div className="flex items-center gap-2">
            <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
              Electric
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                HP
              </span>
              <span className="font-medium">90</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Attack
              </span>
              <span className="font-medium">80</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Defense
              </span>
              <span className="font-medium">55</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Special Attack
              </span>
              <span className="font-medium">90</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Special Defense
              </span>
              <span className="font-medium">80</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Speed
              </span>
              <span className="font-medium">60</span>
            </div>
          </div>
          <div className="grid gap-2">
            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Pikachu is a small, chubby rodent Pokémon. It has red cheeks that
              can store electricity, and a lightning bolt-shaped tail. Pikachu
              is the most famous and recognizable Pokémon, and is the main
              companion of the protagonist Ash Ketchum in the Pokémon anime
              series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
