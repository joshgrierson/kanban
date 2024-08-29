import { FC, PropsWithChildren } from "react";
import { getComponent } from "../getComponent";
import { Logo } from "@/components/Logo";
import { SidebarCollapsable } from "./Sidebar";

type Props = PropsWithChildren;

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Logo className="max-w-[250px] p-7 fill-black dark:fill-white" />
      {children}
    </>
  );
};

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return <header className="flex p-6 border-b border-b-tertiary">{children}</header>;
};

export const HeaderTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grow">
      <h2 className="text-heading-font-lg text-onSecondary font-light">{children}</h2>
    </div>
  );
};

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className="p-3">{children}</main>;
};

const Layout: FC<Props> = ({ children }) => {
  const SidebarComponent = getComponent(children, "Sidebar");
  const HeaderComponent = getComponent(children, "Header");
  const MainComponent = getComponent(children, "Main");

  return (
    <div className="flex w-full">
      <SidebarCollapsable>{SidebarComponent}</SidebarCollapsable>
      <div className="flex flex-col w-full">
        <div className="w-full bg-secondary">{HeaderComponent}</div>
        <div className="w-full h-full bg-quarternary">{MainComponent}</div>
      </div>
    </div>
  );
};

export default Layout;
