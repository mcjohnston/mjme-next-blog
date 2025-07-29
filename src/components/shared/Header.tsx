import Link from "next/link";
import { mainNavLinks } from "@/utils/links.helper";
import Container from "./Container";
import { Fragment } from "react";
import GridRow from "./GridRow";
import MiniLogo from "./MiniLogo";

export default function Header() {
  return (
    <header>
      <Container classOverrides="hidden md:flex">
        <GridRow classOverrides="mt-8">
          <div className="col-span-6 md:col-span-4">
            <MiniLogo />
          </div>
          <nav className="col-span-6 md:col-span-8 ml-auto text-lightnavy font-sans text-1xl uppercase">
            {mainNavLinks.map((link) => (
              <Fragment key={`main-nav-link-${link.title}`}>
                <Link
                  href={link.href}
                  className="underline px-4 py-1 bg-white border-1 border-transparent rounded-2xl transition-all delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:decoration-solid hover:decoration-line-underline"
                >
                  {link.title}
                </Link>
                <div className="inline-block h-full self-center min-h-[1em] w-0.25 bg-neutral-200 dark:bg-white/10 last:hidden" />
              </Fragment>
            ))}
          </nav>
        </GridRow>
      </Container>
    </header>
  );
}
