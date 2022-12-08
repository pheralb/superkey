import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="font-sans bg-backgroundLight dark:bg-backgroundDark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
