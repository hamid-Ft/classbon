import { ReactNode } from "react";
import { ComponentBase } from "../types/component-base.type";

export type BadgeProps = Omit<ComponentBase, "isDisabled"> & {
  children: ReactNode; // ReactNode is a general type for any valid React child, which includes ReactElement, JSX.Element, string, number, boolean, null, undefined, or an array of these types. ReactElement is a specific type for React elements created by JSX or React.createElement. JSX.Element is the TypeScript representation of a JSX element which is equivalent to ReactElement. These types allow for flexibility in defining React component children.
};
