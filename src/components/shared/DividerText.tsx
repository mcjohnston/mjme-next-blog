import { ChildrenWithTailwind } from "@/types/util";
import { twJoin } from "tailwind-merge";

const DividerText: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  const defaults =
    "flex items-center gap-1 w-full before:content-[''] before:flex-1 before:h-[1px] before:bg-neutral-300 after:content-[''] after:flex-1 after:h-[1px] after:bg-neutral-300";
  return (
    <div className={twJoin(defaults, classOverrides)}>
      <span className="whitespace-nowrap italic font-serif text-2xl px-4">
        {children}
      </span>
    </div>
  );
};

export default DividerText;
