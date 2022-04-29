import "styles/globals.css";

import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import theme from "styles/theme";

import AppHeader from "components/layout/AppHeader";
import AppNavigation from "components/layout/AppNavigation/AppNavigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>COLO - Global</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <AppNavigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
