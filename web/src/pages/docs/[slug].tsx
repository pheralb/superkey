import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { docsFilePaths, DOCS_PATH } from "../../utils/mdx";
import matter from "gray-matter";
import Link from "next/link";
import { useRouter } from "next/router";
import SidebarSection from "../../components/docs/sidebarSection";

// Docs data =>
import { Components, Examples, GettingStarted } from "../../data/docs";

// Next-MDX-Remote =>
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Plugins =>
import rehypePrism from "rehype-prism-plus";
import { BiLinkExternal } from "react-icons/bi";

export type DocsType = {
  title: string;
  description?: string;
  slug: string;
};

type DocsProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: DocsType;
};

export default function Docs({ source, frontMatter }: DocsProps) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <div className="fixed z-40 h-full pb-10 overflow-x-hidden overflow-y-auto border-r border-gray-100 dark:border-zinc-800 w-60">
          <div className="py-5">
            <SidebarSection title="🚀 Introduction">
              {GettingStarted.map((item) => (
                <div
                  key={item.path}
                  className={`hover:underline ${
                    `/docs/${slug}` === item.path
                      ? "text-black dark:text-gray-200 font-bold"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <Link href={`${item.path}`}>{item.title}</Link>
                </div>
              ))}
            </SidebarSection>
            <SidebarSection title="📦 Components">
              {Components.map((item) => (
                <div className="mb-3" key={item.path}>
                  <div
                    className={`hover:underline ${
                      `/docs/${slug}` === item.path
                        ? "text-black dark:text-gray-200 font-bold"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <Link href={`${item.path}`}>{item.title}</Link>
                  </div>
                </div>
              ))}
            </SidebarSection>
            <SidebarSection title="🤔 Examples">
              {Examples.map((item) => (
                <div className="hover:underline" key={item.path}>
                  <div className="flex items-center mb-2">
                    <a href={`${item.path}`}>{item.title}</a>
                    <BiLinkExternal className="ml-2 text-xs" />
                  </div>
                </div>
              ))}
            </SidebarSection>
            <SidebarSection title="🎨 Guides">
              <p>Soon 😉</p>
            </SidebarSection>
          </div>
        </div>

        <div className="mt-2 ml-72">
          <div className="pt-6 pb-6 mb-6 border-b border-gray-100 dark:border-zinc-800 font-gtw">
            
            <h1 className="mb-1 text-4xl font-medium">{frontMatter.title}</h1>
            <p className="text-gray-500">{frontMatter.description}</p>
          </div>
          <div className="prose prose-md dark:prose-invert">
            <MDXRemote {...source} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(DOCS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
      format: "mdx",
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = docsFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
