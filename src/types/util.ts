import { type ReactNode } from "react";

// base React child type for extension
export type ReactChildren = {
  children: ReactNode;
};

// common React + TW class for extension
export interface ChildrenWithTailwind extends ReactChildren {
  classOverrides?: string;
}
