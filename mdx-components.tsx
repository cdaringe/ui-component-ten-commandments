import type { MDXComponents } from "mdx/types";
import { Wisdom } from "./src/components/wisdom";
import { CommandmentHeader } from "./src/components/commandment-header";
import { CommandmentList } from "./src/components/commandment-list";

export function useMDXComponents(
  components: MDXComponents,
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-3xl font-bold my-4"
        {...props}
      />
    ),
    Wisdom,
    CommandmentHeader,
    CommandmentList,
    ...components,
  };
}
