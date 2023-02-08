import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/templates/Layout";
import Head from "next/head";
import coverImage from "../public/web-cover.png";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Head>
          <title>Blink Me Code</title>
          <link rel="blink icon" href="/icon/btc.png" />
          <meta
            property="og:image"
            content={`https://www.blinkmecode.com${coverImage}`}
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
