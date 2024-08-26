import { NavigationMenuBar } from "@/components/navigation-menu-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "next-view-transitions";

export const Header = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Monsters Dashboard
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NavigationMenuBar />
      </div>
    </header>
  );
};
