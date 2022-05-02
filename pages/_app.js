import "styles/globals.css";
import "styles/global.helper.css";

import { ThemeProvider } from "@emotion/react";
import AppBody from "components/layout/AppBody";
import AppHeader from "components/layout/AppHeader";
import AppNavigation from "components/layout/AppNavigation/AppNavigation";
import Head from "next/head";
import theme from "styles/theme";
import authStore from "../mobx/store/auth";
import useStore from "../mobx/store";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { authStore } = useStore();
  const router = useRouter();
  return (
    <>
      {router.pathname.indexOf("auth") > -1 ? (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <>
          <Head>
            <title>COLO - Global</title>
          </Head>
          <ThemeProvider theme={theme}>
            <AppHeader />
            <AppNavigation />
            <AppBody>
              <Component {...pageProps} />
            </AppBody>
            <div id="modal-root" />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
