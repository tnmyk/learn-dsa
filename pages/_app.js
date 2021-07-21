import {
  Button,
  ChakraProvider,
  extendTheme,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Head from "next/head";
import { useEffect } from "react";
import {FiExternalLink} from 'react-icons/fi'
function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(onOpen, 800);
  }, []);

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
          fontWeight: "500",
        },
        h3: {
          fontSize: "2rem",
          fontWeight: "500",
        },
        h4: {
          fontSize: "1.5rem",
          fontWeight: "500",
        },
        h5: {
          fontSize: "1.1rem",
          fontWeight: "500",
        },
        ".link": {
          cursor: "pointer",
          color: "lightblue",
          textDecoration: "underline",
          fontSize: "1rem",
          width: "max-content",
          margin: "0.6rem 0",
          display: "block",
          _hover: {},
        },
        ".link-container": {
          marginLeft: "2rem",
          marginBottom: "2rem",
        },
        ".page": {
          marginLeft: "1rem",
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This project is currently under development. <br /> Kindly ignore
            the blank pages if any. <br /> If you can, please consider
            contributing to this project on Github.<br/>You can also help me with graphic designing. <br /> Thank you!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <a
              href="https://github.com/tnmyk/learn-dsa"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline">
                Github Repository{" "}
                <FiExternalLink style={{ marginLeft: "0.4rem" }} />{" "}
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
