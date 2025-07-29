import { ChildrenWithTailwind } from "@/types/util";
import { twJoin } from "tailwind-merge";

const GridRow: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  return (
    <div
      className={twJoin(
        "grid grid-cols-12 w-full items-center justify-center",
        classOverrides
      )}
    >
      {children}
    </div>
  );
};

export default GridRow;
