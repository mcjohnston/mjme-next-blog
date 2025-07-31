import { twJoin } from "tailwind-merge";
import { ChildrenWithTailwind } from "@/types/util";

const Container: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  return (
    <div
      className={twJoin(
        "container flex-row mx-auto w-full px-2 sm:px-6 lg:px-8",
        classOverrides
      )}
    >
      {children}
    </div>
  );
};

export default Container;
