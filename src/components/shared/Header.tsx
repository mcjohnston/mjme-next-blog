import Link from "next/link";
import { mainNavLinks } from "@/utils/links.helper";
import Container from "./Container";
import { Fragment } from "react";

export default function Header() {
  return (
    <header>
      <Container classOverrides="hidden md:flex">
        <div className="flex-row items-center content-center">
          <nav className="flex-row basis-1/2 ml-auto mr-0 items-center text-lightnavy mt-4 font-sans text-1xl justify-end uppercase">
            {mainNavLinks.map((link) => (
              <Fragment key={`main-nav-link-${link.title}`}>
                <Link
                  href={link.href}
                  className="px-4 py-1 bg-white border-1 border-transparent rounded-2xl transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-lightnavy hover:text-offwhite"
                >
                  {link.title}
                </Link>
                <div className="inline-block h-full self-center min-h-[1em] w-0.5 bg-neutral-200 dark:bg-white/10 last:hidden" />
              </Fragment>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
