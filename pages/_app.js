import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };
  const theme = extendTheme({
    config,
    styles: {
      global: {
        h1: {
          fontSize: "5rem",
        },
        h2: {
          fontSize: "3rem",
        },
        h3: {
          fontSize: "2rem",
        },
        h4: {
          fontSize: "1.5rem",
        },
        h5: {
          fontSize: "1.2rem",
        },
        ".link": {
          cursor: "pointer",
          color: "lightblue",
          textDecoration: "underline",
          fontSize: "1.2rem",
          width:'max-content',
          margin:'0.7rem 0',
          display:'block',
          _hover: {},
        },
        ".link-container": {
          marginLeft: "1rem",
        },
      },
    },
  });
  return (
    <ChakraProvider  theme={theme}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
