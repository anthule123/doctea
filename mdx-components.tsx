
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from 'next/image';
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    Image,
    ...components,
  };
}
