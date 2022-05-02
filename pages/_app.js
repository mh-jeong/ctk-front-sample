import "styles/globals.css";
import "styles/global.helper.css";

import { ThemeProvider } from "@emotion/react";
import AppBody from "components/layout/AppBody";
import AppHeader from "components/layout/AppHeader";
import AppNavigation from "components/layout/AppNavigation/AppNavigation";
import Head from "next/head";
import theme from "styles/theme";
import ModalProvider from "components/common/Modal/ModalsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>COLO - Global</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <AppHeader />
          <AppNavigation />
          <AppBody>
            <Component {...pageProps} />
          </AppBody>
          <div id="modal-root" />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
