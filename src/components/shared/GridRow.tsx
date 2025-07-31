import { ChildrenWithTailwind } from "@/types/util";
import { twJoin } from "tailwind-merge";

const GridRow: React.FC<ChildrenWithTailwind> = ({
  children,
  classOverrides,
}) => {
  return (
    <div
      className={twJoin(
        "flex flex-row w-full items-center justify-center",
        classOverrides
      )}
    >
      {children}
    </div>
  );
};

export default GridRow;
