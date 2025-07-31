import { type Metadata } from "next";
import BasePageWrap from "@/components/shared/BasePageWrap";

export const metadata: Metadata = {
  title: "Projects | Matthew Johnston",
  description: "Recent projects of Matthew Johnston",
};

export default function ProjectsPage() {
  return (
    <BasePageWrap>
      <div>This is the Projects Page</div>
    </BasePageWrap>
  );
}
