import { Link } from "next-view-transitions";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Monsters Dashboard
      </Link>
      <div className="flex items-center gap-4">
        <Button variant={"secondary"}>Transition</Button>
      </div>
    </header>
  );
};
