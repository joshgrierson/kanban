import { NavBar, Props } from "@/components/NavBar";
import { getAllBoards } from "@db/queries/boards";
import { query } from "@db/utils";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

async function data() {
  const boards = await query(() => getAllBoards());
  return {
    count: boards?.length ?? 0,
    navItems: boards?.map((board) => ({
      title: board.title,
      link: `/${board.id}`,
      icon: faLink,
    })) as Props["items"],
  };
}

export const SidebarNav: FC = async () => {
  const { count, navItems } = await data();
  return <NavBar heading={`All Boards (${count})`} items={navItems}></NavBar>;
};
