import Head from "next/head";
import { type GetStaticProps } from "next";
import Link from "next/link";

import { allDocContents, type DocContent } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { BiEditAlt } from "react-icons/bi";

const DocLayout = ({ doc }: { doc: DocContent }) => {
  const MDXContent = useMDXComponent(doc.body.code);
  return (
    <>
      <Head>
        <title>{doc.title} - Superkey</title>
      </Head>
      <article className="flex flex-col justify-center max-w-3xl px-5 mx-auto mb-6 md:px-0">
        <div className="flex justify-between pb-4 mt-5 mb-8 border-b border-neutral-300 dark:border-neutral-800">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-medium md:text-4xl">{doc.title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{doc.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://github.com/pheralb/superkey/blob/main/docs/content/${doc.url
                .split("/")
                .slice(2)
                .join("/")}.mdx`}
              className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              <BiEditAlt size={18} />
            </a>
          </div>
        </div>
        <div className="prose dark:prose-invert">
          <MDXContent />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc: DocContent = allDocContents.find(
    (post) => post._raw.flattenedPath === params?.slug
  ) as DocContent;
  return {
    props: {
      doc,
    },
  };
};

export async function getStaticPaths() {
  const paths: string[] = allDocContents.map((doc) => doc.url);
  return {
    paths,
    fallback: false,
  };
}

export default DocLayout;
