import { FC } from "react";

export type Props = {
  title: string;
  text: string;
  className?: string;
  onClick?: () => void;
};

export const Card: FC<Props> = ({ title, text, className, onClick }) => {
  return (
    <div
      role={onClick ? "button" : ""}
      onClick={onClick}
      className={`bg-card-bg rounded-card p-card font-light ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <h3 className="text-card-title">{title}</h3>
      <p className="text-card-text">{text}</p>
    </div>
  );
};
