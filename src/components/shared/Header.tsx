import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Porfolio</Link>
      <Link href="/porfolio/resume">Resume</Link>
      <Link href="/porfolio/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Blog</Link>
    </div>
  );
}
