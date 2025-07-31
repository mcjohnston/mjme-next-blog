import { type Metadata } from "next";
import BasePageWrap from "@/components/shared/BasePageWrap";

export const metadata: Metadata = {
  title: "About | Matthew Johnston",
  description: "Learn a bit more about Matthew Johnston",
};

export default function AboutPage() {
  return (
    <main>
      <BasePageWrap>This is the AboutPage</BasePageWrap>
    </main>
  );
}
