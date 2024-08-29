import { FC, PropsWithChildren } from "react";
import { getAllComponents } from "../getComponent";

type Props = PropsWithChildren & {
  className?: string;
};

const Swimlane: FC<PropsWithChildren> = ({ children }) => {
  return <div className="min-w-[250px]">{children}</div>;
};

const SwimlaneHeader: FC<PropsWithChildren & { color?: string }> = ({ children, color }) => {
  return (
    <div className="flex items-center mb-3 text-tertiary">
      {color && (
        <span
          className="inline-block w-[14px] h-[14px] mr-2 rounded-full"
          style={{ backgroundColor: color }}
        ></span>
      )}
      {children}
    </div>
  );
};

const SwimlaneContent: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

const Layout: FC<Props> = ({ children, className }) => {
  const SwimlaneComponents = getAllComponents(children, "Swimlane");
  return <div className={`flex gap-5 ${className}`}>{SwimlaneComponents}</div>;
};

export const SwimlanesLayout = { Layout, Swimlane, SwimlaneHeader, SwimlaneContent };
