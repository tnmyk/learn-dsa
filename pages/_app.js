import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
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
        ".link": {
          cursor: "pointer",
          color:'lightblue',textDecoration:'underline',
          fontSize:'1.2rem',
          _hover:{
            
          
          }
        },
        ".link-container":{
          marginLeft:'1rem'
        }
      },
    },
  });
  return (
    <ChakraProvider  theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
