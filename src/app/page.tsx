import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import DividerText from "@/components/shared/DividerText";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="grid grid-cols-12 md:my-24">
          <div className="col-span-12 md:col-span-6 lg:col-span-8 mb-10 md:mb-0 order-2 md:order-1">
            <div className="px-8 md:px-0 my-8">
              <h1 className="text-lightnavy font-sans text-4xl md:text-6xl font-bold">
                Hi there, name&apos;s Matt
              </h1>
              <p className="font-serif text-[1.5rem] break-normal mt-6">
                I&apos;m a Full-Stack, leaning towards the Front End, Developer
                from
                <span className="font-bold"> Indianapolis, Indiana</span>
              </p>
              <p className="font-serif text-[1.5rem] break-normal mt-4">
                <span className="italic">Currently looking for work</span>
                <span className="text-2xl">👷</span>
              </p>
              <div className="mt-6">
                <Button
                  className="flex sm:inline-flex md:px-8"
                  variant="default"
                  asChild
                >
                  <Link href="/resume">View My Resume</Link>
                </Button>
                <DividerText classOverrides="flex mx-auto my-8 md:my-0 sm:mx-4 md:mx-8 sm:inline-flex sm:max-w-24 md:max-w-30">
                  or
                </DividerText>
                <Button
                  className="flex sm:inline-flex md:px-8"
                  variant="secondary"
                  asChild
                >
                  <Link href="/projects">Previous Projects</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 order-0 md:order-2">
            <Image
              src="/images/avatars-icons/gh-prof-photo.jpg"
              alt="Matthew Johnston - Web Developer"
              width={460}
              height={460}
              className="rounded-full max-w-74 mx-auto shadow-md mt-12 md:mt-0 mb-8 md:mb-0"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
