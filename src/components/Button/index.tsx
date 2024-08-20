import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  size?: "small" | "medium";
  fill?: boolean;
  invertColor?: boolean;
  icon?: IconProp;
};

export const Button: FC<Props> = ({ children, size = "medium", fill, invertColor, icon }) => {
  const spacing = {
    small: "p-button-sm",
    medium: "p-button",
  };
  const fillWidth = fill ? "block w-full" : "";
  const bgColor = invertColor
    ? "bg-button-bg-invert hover:bg-button-bg-invert-hover"
    : "bg-button-bg hover:bg-button-bg-hover";
  const textColor = invertColor ? "text-button-text-invert" : "text-button-text";
  return (
    <button
      className={`${fillWidth} min-w-[100px] ${bgColor} ${textColor} ${spacing[size]} rounded-button focus:ring`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1" />}
      {children}
    </button>
  );
};
