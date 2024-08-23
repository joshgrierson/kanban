import { ReactNode, Children, ReactElement, FC } from "react";

function _getComponents(children: ReactNode, name: string) {
  const childrenToArray = Children.toArray(children);
  return childrenToArray.filter(
    (child) => (child as ReactElement<any, FC>).type.name === name,
  ) as ReactElement[];
}

export function getComponent(children: ReactNode, name: string) {
  return _getComponents(children, name)[0] ?? <></>;
}

export function getAllComponents(children: ReactNode, name: string) {
  return _getComponents(children, name);
}
