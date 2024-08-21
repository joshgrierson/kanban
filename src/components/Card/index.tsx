import { FC } from "react";

type Props = {
  title: string;
  text: string;
  onClick?: () => void;
};

export const Card: FC<Props> = ({ title, text, onClick }) => {
  return (
    <div
      role={onClick ? "button" : ""}
      onClick={onClick}
      className={`bg-card-bg rounded-card p-card ${onClick ? "cursor-pointer" : ""}`}
    >
      <h3 className="text-card-title">{title}</h3>
      <p className="text-card-text">{text}</p>
    </div>
  );
};
