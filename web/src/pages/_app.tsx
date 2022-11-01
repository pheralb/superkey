import type { AppProps } from "next/app";

// Styles =>
import "../styles/globals.css";

// Import style from Superkey =>
import "superkey/styles.css";

// Toaster =>
import { Toaster } from "react-hot-toast";

// Layout =>
import Header from "../components/header";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
