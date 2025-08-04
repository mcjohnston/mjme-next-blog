import { pluckYear } from "@/utils/format-dates";
import { socialLinks } from "@/utils/links.helper";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 sticky top-[100vh] w-full bg-darknavy text-offwhite border-t-neutral-300 border-t-2 font-sans">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 text-center md:text-left">
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
          <div className="col-span-12 md:col-span-6 text-center md:text-right">
            <p>&copy; {pluckYear(new Date())} Matthew Johnston</p>
            <p>Words and opinions expressed here are my own.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
