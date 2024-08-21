import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

type Props = {
  heading?: string;
  onClick?: (itemIndex?: number) => void;
  items: {
    title: string;
    link: string;
    invert?: boolean;
    active?: boolean;
    icon?: IconProp;
  }[];
};

export const NavBar: FC<Props> = ({ heading, items, onClick }) => {
  const onItemClick: Props["onClick"] = (itemIndex) => {
    if (onClick) {
      onClick(itemIndex);
    }
  };

  return (
    <nav className="min-w-[230px] text-navbar">
      {heading && (
        <h5 className="pl-6 my-3 text-navbar-item-text uppercase font-semibold">{heading}</h5>
      )}
      <ul>
        {items.map(({ title, link, icon, active, invert }, index) => {
          const _class = [
            "block py-3 pl-6 rounded-r-navbar-item",
            !invert ? "hover:bg-navbar-item-hover-bg" : "",
            !invert ? "hover:text-navbar-item-text-hover" : "",
            invert ? "text-navbar-item-text-invert" : "text-navbar-item-text",
            active ? "bg-navbar-item-active-bg text-navbar-item-text-active" : "",
          ].join(" ");
          return (
            <li key={`${title}_${index}`} onClick={() => onItemClick(index)}>
              <Link href={link} className={_class}>
                {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
