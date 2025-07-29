import GitHubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import { type MainNavLink, type SocialLink } from "@/types/links";

// TODO: Possibly export these out to constants or another util
export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/matthew-johnston-8776423a/",
    activeAreas: ["header"],
  },
  {
    title: "Github",
    icon: <GitHubIcon />,
    url: "https://github.com/mcjohnston",
    activeAreas: ["header"],
  },
  {
    title: "LinkedIn",
    icon: (
      <LinkedInIcon classOverrides="w-8 h-8 first:ml-0 ml-2 hover:fill-sand transition-colors duration-100 ease-in-out" />
    ),
    url: "https://www.linkedin.com/in/matthew-johnston-8776423a/",
    activeAreas: ["footer"],
  },
  {
    title: "Github",
    icon: (
      <GitHubIcon classOverrides="w-8 h-8 ml-2 hover:fill-sand transition-colors duration-100 ease-in-out" />
    ),
    url: "https://github.com/mcjohnston",
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
    href: "/portfolio/resume",
  },
  {
    title: "Projects",
    href: "/portfolio/projects",
  },
  {
    title: "Blog",
    href: "/posts",
  },
];
