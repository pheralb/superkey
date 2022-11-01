import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { docsFilePaths, DOCS_PATH } from "../../utils/mdx";
import matter from "gray-matter";

// Next-MDX-Remote =>
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export type DocsType = {
  title: string;
  description?: string;
  slug: string;
};

type DocsProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: DocsType;
};

export default function Post({ source, frontMatter }: DocsProps) {
  return (
    <>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.description}</p>
      <MDXRemote {...source} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(DOCS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
