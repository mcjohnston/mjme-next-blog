import Link from "next/link";
import { Fragment } from "react";
import { mainNavLinks } from "@/utils/links.helper";
import MiniLogo from "./MiniLogo";
import BurgerMenuIcon from "../icons/burger-menu";

export default function Header() {
  return (
    <header>
      <nav className="bg-lightblue border-neutral-200 border-b-2">
        <div className="mx-auto md:container px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <BurgerMenuIcon />
              </button>
            </div>
            <div className="flex flex-row w-full justify-center items-center">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <MiniLogo />
                </Link>
              </div>
              <div className="hidden sm:ml-auto sm:flex">
                <div className="flex space-x-4">
                  {mainNavLinks.map((link) => (
                    <Fragment key={`main-nav-link-${link.title}`}>
                      <Link
                        href={link.href}
                        className="rounded-sm px-2 py-2 text-md font-medium font-sans text-lightnavy tracking-wider hover:bg-lightnavy hover:text-white transition-all"
                      >
                        {link.title}
                      </Link>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu type-disclosure"
          hidden
          className="block sm:hidden"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {mainNavLinks.map((link) => (
              <Fragment key={`main-nav-link-${link.title}`}>
                <Link
                  href={link.href}
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  {link.title}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
