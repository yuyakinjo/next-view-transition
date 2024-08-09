import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "next-view-transitions";

export const MenuBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>追加</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <Link href="create">新規追加</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
