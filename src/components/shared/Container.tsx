import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  classOverrides?: string;
};
const Container: React.FC<ContainerProps> = ({ children, classOverrides }) => {
  return (
    <div
      className={`container mx-auto w-full gap-x-2 gap-y-2 ${
        classOverrides || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
