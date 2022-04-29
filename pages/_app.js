import "../styles/globals.css";

import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>COLO - Global</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
