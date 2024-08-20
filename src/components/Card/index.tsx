import { FC } from "react";

type Props = {
  title: string;
  text: string;
};

export const Card: FC<Props> = ({ title, text }) => {
  return (
    <div className="bg-card-bg rounded-card p-card">
      <h3 className="text-card-title">{title}</h3>
      <p className="text-card-text">{text}</p>
    </div>
  );
};
