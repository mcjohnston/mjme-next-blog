import Link from "next/link";
import { Fragment } from "react";
import { mainNavLinks } from "@/utils/links.helper";
// import Container from "./Container";
// import GridRow from "./GridRow";
import MiniLogo from "./MiniLogo";
import BurgerMenuIcon from "../icons/burger-menu";

export default function Header() {
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto container px-2 sm:px-6 lg:px-8">
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
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <MiniLogo />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ml-auto">
                  {mainNavLinks.map((link) => (
                    <Fragment key={`main-nav-link-${link.title}`}>
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
