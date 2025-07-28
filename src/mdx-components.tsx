import type { MDXComponents } from "mdx/types";

// TODO: Add default components for MDX parsing here
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
