import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import Head from "next/head";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  const { pathname, asPath, back } = useRouter();
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    const lastPath = asPath.substring(
      asPath.lastIndexOf("/") + 1,
      asPath.length
    );
    if (!lastPath) return;
    if (lastPath.indexOf("-") === -1)
      return setTitle(
        lastPath[0].toUpperCase() + lastPath.substring(1, lastPath.length)
      );

    setTitle(
      lastPath
        .split("-")
        .map((x) => {
          return x[0].toUpperCase() + x.substring(1, x.length);
        })
        .join(" ")
    );
  }, [asPath]);
  return (
    <Flex
      bgColor="#010102"
      // bgColor="#050609"
      width="100%"
      h="100vh"
      overflow="hidden"
    >
      <Navbar />
      <Head>
        <title>{title}</title>
      </Head>
      <Box w="100%" p="1rem 3rem" overflow="auto" position="relative">
        {pathname !== "/" && (
          <IoIosArrowRoundBack
            style={{
              display: "block",
              marginBottom: "2rem",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              back();
            }}
          />
        )}
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
