import Image from "next/image";
import Container from "@/components/shared/Container";
import DividerText from "@/components/shared/DividerText";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="flex md:my-24">
          <div className="flex-wrap flex-col md:basis-1/2 lg:basis-3/4 bg-lightblue shadow-2xs md:shadow-none mb-10 md:mb-0 rounded-2xl md:rounded-none md:bg-transparent order-1 md:order-0">
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
                <button className="inline-flex" type="button">
                  View My Resume
                </button>
                <DividerText>or</DividerText>
                <button className="inline-flex" type="button">
                  Previous Projects
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col md:basis-1/2 lg:basis-1/3">
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
