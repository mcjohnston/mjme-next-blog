import { ReactNode } from "react";
import { LinkProps } from "next/link";

export interface MainNavLink extends LinkProps {
  title: string;
}

export type SocialLink = {
  title: string;
  url: string;
  icon?: ReactNode;
  activeAreas?: string[];
};

export type LinkIconProps = {
  classOverrides?: string;
};
