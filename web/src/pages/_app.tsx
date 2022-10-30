import type { AppProps } from "next/app";

// Styles =>
import "../styles/globals.css";

// Import style from Superkey =>
import "superkey/styles.css";

// Toaster =>
import { Toaster } from "react-hot-toast";

// Layout =>
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
