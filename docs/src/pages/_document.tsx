import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#121212" />
      </Head>
      <body className="font-sans bg-backgroundLight dark:bg-backgroundDark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
