import type { AppProps } from "next/app";

// Styles =>
import "@/styles/globals.css";
import "@/styles/prism.css";
import "superkey/styles.css";
import { ThemeProvider } from "next-themes";

// SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

// Layout =>
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <ThemeProvider attribute="class">
        <Header />
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </ThemeProvider>
    </>
  );
}
