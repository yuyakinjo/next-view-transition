import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";
import { Link } from "next-view-transitions";

export const MenuBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="/create">新規追加</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
