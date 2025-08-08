import FileDL from "@/components/icons/filedl";
import GitHubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import { type MainNavLink, type SocialLink } from "@/types/links";
import { twJoin } from "tailwind-merge";

const sharedLinks = {
  linkedIn: "https://www.linkedin.com/in/matthew-johnston-8776423a/",
  github: "https://github.com/mcjohnston",
};

const resumeIconLinkClasses =
  "w-8 h-8 ml-2 transition-colors duration-100 ease-in-out";
const footerIconClasses =
  "w-8 h-8 ml-2 hover:fill-sand transition-colors duration-100 ease-in-out";
const resumeFillIcons = twJoin(
  resumeIconLinkClasses,
  "fill-lightnavy hover:fill-basetan"
);
const resumeStrokeIcons = twJoin(
  resumeIconLinkClasses,
  "stroke-lightnavy hover:stroke-basetan"
);

export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    icon: <LinkedInIcon classOverrides={resumeFillIcons} />,
    url: sharedLinks.linkedIn,
    activeAreas: ["resume"],
  },
  {
    title: "Github",
    icon: <GitHubIcon classOverrides={resumeFillIcons} />,
    url: sharedLinks.github,
    activeAreas: ["resume"],
  },
  {
    title: "Resume",
    icon: <FileDL classOverrides={resumeStrokeIcons} />,
    url: "/files/resume-current.pdf",
    activeAreas: ["resume"],
  },
  {
    title: "LinkedIn",
    icon: (
      <LinkedInIcon classOverrides={twJoin(footerIconClasses, "first:ml-0")} />
    ),
    url: sharedLinks.linkedIn,
    activeAreas: ["footer"],
  },
  {
    title: "Github",
    icon: <GitHubIcon classOverrides={footerIconClasses} />,
    url: sharedLinks.github,
    activeAreas: ["footer"],
  },
];

export const mainNavLinks: MainNavLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/posts",
  },
];
