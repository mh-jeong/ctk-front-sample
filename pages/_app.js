import "styles/globals.css";
import "styles/global.helper.css";

import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "styles/theme";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>COLO - Global</title>
        </Head>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
          <div id="un_modalRoot" />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
