import { baseDateFormat } from "@/utils/format-dates";
import { Fragment, ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import DividerText from "../shared/DividerText";

type ResumeItemProps = {
  logo?: ReactNode;
  companyName: string;
  positionTitle: string;
  location: string;
  from: Date;
  to: Date;
  skills?: string[];
  children: ReactNode;
};

const ResumeItem: React.FC<ResumeItemProps> = ({
  logo,
  companyName,
  positionTitle,
  location,
  from,
  to,
  skills,
  children,
}) => {
  return (
    <div className="grid grid-cols-12 font-sans border-1 border-neutral-300 mb-12">
      {logo && (
        <div
          className={twJoin(
            logo ? "col-span-12 md:col-span-4" : "",
            "justify-center items-center"
          )}
        >
          <div className="flex items-center justify-center h-full p-10 border-b-1 md:border-b-0 md:border-r-1 border-r-neutral-300">
            {logo}
          </div>
        </div>
      )}
      <div
        className={twJoin(logo ? "col-span-12 md:col-span-8" : "col-span-12")}
      >
        <div className="p-4 md:p-20 pt-10 md:pt-8">
          <div className="block">
            <h2 className="font-bold text-lightnavy text-2xl inline-flex mb-1 md:mb-4">
              {companyName}
            </h2>
            <p className="block md:inline-flex lg:ml-2">
              <span className="hidden lg:inline">-</span> {positionTitle}
            </p>
          </div>
          <div className="flex flex-col md:flex-row font-sans mb-8">
            <div className="basis-full md:basis-1/3">
              <strong>{location}</strong>
            </div>
            <div className="basis-full md:basis-1/3">
              <span className="text-lightnavy font-semibold">From: </span>
              {baseDateFormat(from)}
            </div>
            <div className="basis-full md:basis-1/3">
              <span className="text-lightnavy font-semibold">To: </span>
              {baseDateFormat(to)}
            </div>
          </div>
          {children}
          {skills && skills.length > 0 ? (
            <div className="">
              <DividerText
                classOverrides="font-medium text-lightnavy font-sans mt-12 mb-4"
                textOverrides="not-italic pl-0"
                hideLeft
              >
                Skills used :
              </DividerText>
              <p>
                {skills?.map((skill) => (
                  <Fragment key={`skills-list-${companyName}-${skill}`}>
                    <span className="inline-flex items-center rounded-md bg-neutral-200 text-xs font-medium text-lightnavy px-3 py-0.5 mr-2 mb-2">
                      {skill}
                    </span>
                  </Fragment>
                ))}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
