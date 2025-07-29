import Image from "next/image";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex-row my-24 md:my-48 items-center content-center">
          <div className="flex-col basis-full md:basis-1/2 order-1 md:order-0">
            <h1 className="text-lightnavy font-sans text-6xl font-bold">
              Hi there, <br /> Name&apos;s Matt
            </h1>
            <p className="font-serif text-[1.5rem] break-normal mt-6 antialiased">
              I&apos;m a Full-Stack Developer currently living and working in
              <span className="font-bold"> Indianapolis, Indiana</span>
            </p>
          </div>
          <div className="flex-col basis-full md:basis-1/2 order-0 md:order-1">
            <Image
              src="/images/avatars-icons/gh-prof-photo.jpg"
              alt="Matthew Johnston - Web Developer"
              width={460}
              height={460}
              className="rounded-full max-w-74 mx-auto shadow-md mt-12 md:mt-0"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
