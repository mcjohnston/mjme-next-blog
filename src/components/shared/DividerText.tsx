import { ChildrenWithTailwind } from "@/types/util";

const DividerText: React.FC<ChildrenWithTailwind> = ({ children }) => {
  return (
    <div className="flex items-center gap-1 w-full before:content-[''] before:flex-1 before:h-[1px] before:bg-neutral-300 after:content-[''] after:flex-1 after:h-[1px] after:bg-neutral-300">
      <span className="whitespace-nowrap italic font-serif text-2xl px-4">
        {children}
      </span>
    </div>
  );
};

export default DividerText;
