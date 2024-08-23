import { FC, PropsWithChildren, useState } from "react";
import { Logo } from "../../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getComponent } from "../getComponent";

type Props = PropsWithChildren;

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Logo className="max-w-[250px] p-7 fill-black dark:fill-white" />
      {children}
    </>
  );
};

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <header className="flex p-6 border-b border-b-tertiary">{children}</header>;
};

const HeaderTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grow">
      <h2 className="text-heading-font-lg text-onSecondary font-light">{children}</h2>
    </div>
  );
};

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className="p-3">{children}</main>;
};

const Layout: FC<Props> = ({ children }) => {
  const SidebarComponent = getComponent(children, "Sidebar");
  const HeaderComponent = getComponent(children, "Header");
  const MainComponent = getComponent(children, "Main");

  const [expanded, setExpanded] = useState(true);
  const [expandIcon, setExpandIcon] = useState<IconProp>(faChevronLeft);

  const onToggleExpand = () => {
    let _expanded = !expanded;
    setExpandIcon(_expanded ? faChevronLeft : faChevronRight);
    setExpanded(_expanded);
  };

  return (
    <div className="flex w-full">
      <div
        className={`relative hidden sm:block bg-secondary border-r border-r-tertiary h-lvh max-w-[350px] ${expanded ? "w-full" : "w-10"}`}
      >
        <FontAwesomeIcon
          className="absolute top-28 -right-5 w-6 h-6 p-2 rounded-full border border-tertiary bg-secondary text-onSecondary"
          role="button"
          icon={expandIcon}
          onClick={onToggleExpand}
        />
        {SidebarComponent}
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full bg-secondary">{HeaderComponent}</div>
        <div className="w-full h-full bg-quarternary">{MainComponent}</div>
      </div>
    </div>
  );
};

export const AppLayout = { Layout, Sidebar, Header, HeaderTitle };
