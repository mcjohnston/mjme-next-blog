import { pluckYear } from "@/utils/format-dates";
import { socialLinks } from "@/utils/links.helper";

export default function Footer() {
  return (
    <footer className="text-center flex-wrap items-center justify-center pt-10 pb-14 bg-darknavy text-offwhite size-xl">
      <div className="flex-row items-center justify-center">
        <div className="flex-col w-full md:basis-1/3">
          {socialLinks
            .filter((link) => link.activeAreas?.includes("footer"))
            .map((link) => (
              <a
                key={`footer-social-link-${link.title}`}
                href={link.url}
                target="_blank"
                className="inline-flex fill-white"
              >
                {link.icon}
              </a>
            ))}
        </div>
        <div className="flex-col basis-full md:basis-1/3 ml-auto">
          &copy; {pluckYear(new Date())} Matthew Johnston
          <br className="md:hidden" /> <span className="sm:hidden">-</span>
          Words and opinions expressed here are my own.
        </div>
      </div>
    </footer>
  );
}
