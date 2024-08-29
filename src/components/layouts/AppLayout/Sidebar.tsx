"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, PropsWithChildren, useState } from "react";

export const SidebarCollapsable: FC<PropsWithChildren> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const [expandIcon, setExpandIcon] = useState<IconProp>(faChevronLeft);

  const onToggleExpand = () => {
    let _expanded = !expanded;
    setExpandIcon(_expanded ? faChevronLeft : faChevronRight);
    setExpanded(_expanded);
  };
  return (
    <div
      className={`relative hidden sm:block bg-secondary border-r border-r-tertiary h-lvh max-w-[350px] ${expanded ? "w-full" : "w-10"}`}
    >
      <FontAwesomeIcon
        className="absolute top-28 -right-5 w-6 h-6 p-2 rounded-full border border-tertiary bg-secondary text-onSecondary"
        role="button"
        icon={expandIcon}
        onClick={onToggleExpand}
      />
      {children}
    </div>
  );
};
