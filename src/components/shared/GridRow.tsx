import { ChildrenWithTailwind } from "@/types/util";
import { twJoin } from "tailwind-merge";

const GridRow: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  return (
    <div
      className={twJoin("w-full items-center justify-center", classOverrides)}
    >
      {children}
    </div>
  );
};

export default GridRow;
