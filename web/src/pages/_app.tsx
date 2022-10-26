import type { AppProps } from "next/app";

// Styles =>
import "../styles/globals.css";

// Import style from Superkey =>
import "superkey/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1 className="text-red-600">hola</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
