import Head from "next/head";
import { type GetStaticProps } from "next";

import { allDocContents, type DocContent } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

const DocLayout = ({ doc }: { doc: DocContent }) => {
  const MDXContent = useMDXComponent(doc.body.code);
  return (
    <>
      <Head>
        <title>{doc.title}</title>
      </Head>
      <article className="max-w-xl py-8 mx-auto">
        <div className="mb-8 text-center">
          <h1>{doc.title}</h1>
        </div>
        <div className="prose prose-invert">
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
