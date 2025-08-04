import { type Metadata } from "next";
import BasePageWrap from "@/components/shared/BasePageWrap";
import Image from "next/image";
import ResumeItem from "@/components/resume/ResumeItem";

export const metadata: Metadata = {
  title: "Resume | Matthew Johnston",
  description: "The current resume of Matthew Johnston",
};
export default function ResumePage() {
  return (
    <>
      <div className="bg-sand">
        <h1>Matthew Johnston</h1>
        <p>
          Front-End Developer with over 10 years of experience across various
          industries and verticals, from Fortune 100 companies to startups.
          Proficient in React and general lover of all things JavaScript /
          TypeScript and adjacent technologies.
        </p>
      </div>
      <BasePageWrap>
        <ResumeItem
          companyName="Sparq"
          positionTitle="Senior II Web Developer Front-end"
          location="Fort Wayne, IN"
          from={new Date(2021, 3, 1)}
          to={new Date(2025, 4, 31)}
          logo={
            <Image
              src="/images/resume/sparq-logo.svg"
              alt="Sparq Logo"
              width={100}
              height={100}
              className="w-full"
            />
          }
          skills={[
            "HTML",
            "CSS",
            "React",
            "JavaScript",
            "TypeScript",
            "Node",
            "SCSS",
            "MaterialUI",
            "Ant Design",
            "Jest",
            "RTL",
            "NextJS",
            "Swagger",
            "Jenkins",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Assisted in the modernization and development of a React dashboard
              application for a client in the Payroll / FinTech sector.
            </li>
            <li className="mb-2">
              Led front-end efforts in a long-term modernization project for
              internal applications for a shipping industry client.
            </li>
            <li className="mb-2">
              Provided React expertise to facilitate a client&apos;s migration
              of end-user facing marketing sites to a modern JavaScript stack
              integrated with headless CMS services.
            </li>
            <li className="mb-2">
              Mentored and supported junior developers through our junior
              associate program, fostering their professional growth.
            </li>
            <li className="mb-2">
              Managed a team of junior to senior-level employees, ensuring
              project alignment with company goals.
            </li>
          </ul>
        </ResumeItem>
        <ResumeItem
          companyName="Australlian Gold"
          positionTitle="Senior UI Developer"
          location="Indianapolis, IN"
          from={new Date(2019, 8, 1)}
          to={new Date(2021, 2, 31)}
          logo={
            <Image
              src="/images/resume/ag-logo.svg"
              alt="Australian Gold Logo"
              width={100}
              height={100}
              className="w-full"
            />
          }
          skills={[
            "HTML",
            "CSS",
            "React",
            "JavaScript",
            "TypeScript",
            "Node",
            "SCSS",
            "Nivo",
            "Recharted",
            "React-DND",
            "Jest",
            "Enzyme",
            "PHP",
            "MS SQL",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Oversaw the maintenance and updates of multiple client-facing
              applications
            </li>
            <li className="mb-2">
              Focused primarily on enhancing a management dashboard that
              seamlessly integrated with the Point of Sale application.
            </li>
            <li className="mb-2">
              Championed the upgrade of legacy systems to more modern technology
              stacks and development practices.
            </li>
          </ul>
        </ResumeItem>

        <ResumeItem
          companyName="Developer Town"
          positionTitle="Web Developer"
          location="Indianapolis, IN"
          from={new Date(2019, 6, 1)}
          to={new Date(2021, 9, 31)}
          skills={[
            "HTML",
            "CSS",
            "React",
            "JavaScript",
            "TypeScript",
            "Node",
            "SCSS",
            "Jest",
            "Material Table",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Short term contact position consulting for a client in the
              hospitality industry, focusing on the development of an internal
              dashboard application.
            </li>
          </ul>
        </ResumeItem>

        <ResumeItem
          companyName="Fusion Alliance"
          positionTitle="UI / UX Developer"
          location="Indianapolis, IN"
          from={new Date(2016, 3, 1)}
          to={new Date(2019, 3, 30)}
          logo={
            <Image
              src="/images/resume/fa-logo.svg"
              alt="Fusion Alliance Logo"
              width={100}
              height={100}
              className="w-full"
            />
          }
          skills={[
            "HTML",
            "CSS",
            "React",
            "JavaScript",
            "TypeScript",
            "Node",
            "MERN",
            "SCSS",
            "GraphQL",
            "MongoDB",
            "Gulp",
            "WordPress",
            "Enzyme",
            "PHP",
            "MySQL",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Oversaw the maintenance and updates of multiple client-facing
              applications
            </li>
            <li className="mb-2">
              Focused primarily on enhancing a management dashboard that
              seamlessly integrated with the Point of Sale application.
            </li>
            <li className="mb-2">
              Championed the upgrade of legacy systems to more modern technology
              stacks and development practices.
            </li>
          </ul>
        </ResumeItem>

        <ResumeItem
          companyName="Stens"
          positionTitle="Web Developer"
          location="Jasper, IN"
          from={new Date(2014, 2, 1)}
          to={new Date(2016, 3, 30)}
          logo={
            <Image
              src="/images/resume/stens-logo.svg"
              alt="Stens Logo"
              width={100}
              height={100}
              className="w-full"
            />
          }
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node",
            "Gulp",
            "Grunt",
            "SCSS",
            "MSSQL",
            ".Net",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Collaborated with marketing and brand teams to update and maintain
              all brand websites, enhancing brand visibility.
            </li>
            <li className="mb-2">
              Created mobile-friendly sites for all major brands, improving user
              accessibility.
            </li>
            <li className="mb-2">
              Revamped tools and processes used in asset management,
              facilitating smoother operations.
            </li>
          </ul>
        </ResumeItem>

        <ResumeItem
          companyName="Catalyst Group"
          positionTitle="Web Developer"
          location="Indianapolis, IN"
          from={new Date(2012, 8, 1)}
          to={new Date(2014, 2, 30)}
          logo={
            <Image
              src="/images/resume/catalyst-logo.png"
              alt="Catalyst Group Logo"
              width={100}
              height={100}
              className="w-auto"
            />
          }
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "SCSS",
            "Compass",
            "Grunt",
            "PHP",
            "WordPress",
            "MySQL",
          ]}
        >
          <ul className="list-inside list-disc">
            <li className="mb-2">
              Collaborated with marketing and brand teams to update and maintain
              all brand websites, enhancing brand visibility.
            </li>
            <li className="mb-2">
              Created mobile-friendly sites for all major brands, improving user
              accessibility.
            </li>
            <li className="mb-2">
              Revamped tools and processes used in asset management,
              facilitating smoother operations.
            </li>
          </ul>
        </ResumeItem>
      </BasePageWrap>
    </>
  );
}
