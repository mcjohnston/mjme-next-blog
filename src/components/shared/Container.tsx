import { twJoin } from "tailwind-merge";
import { ChildrenWithTailwind } from "@/types/util";

const Container: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  return (
    <div className={twJoin("container mx-auto w-full", classOverrides)}>
      {children}
    </div>
  );
};

export default Container;
