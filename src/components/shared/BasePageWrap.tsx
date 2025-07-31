import Container from "@/components/shared/Container";
import GridRow from "@/components/shared/GridRow";
import { ReactChildren } from "@/types/util";

const BasePageWrap: React.FC<ReactChildren> = ({ children }) => {
  return (
    <Container>
      <GridRow classOverrides="mt-20 mb-30">
        <div className="w-full">{children}</div>
      </GridRow>
    </Container>
  );
};

export default BasePageWrap;
