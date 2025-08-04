import { ChildrenWithTailwind } from "@/types/util";
import { twJoin } from "tailwind-merge";

interface DividerTextProps extends ChildrenWithTailwind {
  textOverrides?: string;
  hideLeft?: boolean;
  hideRight?: boolean;
}

const DividerText: React.FC<DividerTextProps> = ({
  children,
  classOverrides,
  textOverrides,
  hideLeft,
  hideRight,
}) => {
  const defaults =
    "flex items-center gap-1 w-full before:content-[''] before:flex-1 before:h-[1px] before:bg-neutral-300 after:content-[''] after:flex-1 after:h-[1px] after:bg-neutral-300";
  return (
    <div
      className={twJoin(
        defaults,
        classOverrides,
        hideLeft ? "before:hidden" : "",
        hideRight ? "after:hidden" : ""
      )}
    >
      <span
        className={twJoin(
          "whitespace-nowrap italic font-serif text-2xl px-4",
          textOverrides
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default DividerText;
