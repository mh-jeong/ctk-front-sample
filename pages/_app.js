import "styles/globals.css";
import "styles/global.helper.css";

import { ThemeProvider } from "@emotion/react";
import AppBody from "components/layout/AppBody";
import AppHeader from "components/layout/AppHeader";
import AppNavigation from "components/layout/AppNavigation/AppNavigation";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "styles/theme";

import useStore from "../mobx/store";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const { authStore } = useStore();
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>COLO - Global</title>
        </Head>
        <ThemeProvider theme={theme}>
          <AppHeader />
          <AppNavigation />
          <AppBody>
            <Component {...pageProps} />
          </AppBody>
          <div id="un_modalRoot" />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
