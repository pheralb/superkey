import type { AppProps } from "next/app";

// Styles =>
import "@/styles/globals.css";

// SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </>
  );
}
