import type { AppProps } from "next/app";

// Styles =>
import "../styles/globals.css";
import "../styles/prism-one-dark.css";

// Import style from Superkey =>
import "superkey/styles.css";

// Toaster =>
import { Toaster } from "react-hot-toast";

// Layout =>
import Header from "../components/header";
import { ThemeProvider } from "next-themes";

// Animate =>
import { motion } from "framer-motion";

// Our custom command example =>
import CommandExample from "../example/command";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Toaster />
      <CommandExample />
    </ThemeProvider>
  );
}

export default MyApp;
