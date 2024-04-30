import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Monsters Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button variant={"secondary"}>Transition</Button>
      </div>
    </header>
  );
};
