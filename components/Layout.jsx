import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
const Layout = ({ children }) => {
  const { pathname, back } = useRouter();
  console.log(pathname);
  return (
    <Flex
      bgColor="#010102"
      // bgColor="#050609"
      width="100%"
      h="100vh"
      overflow="hidden"
    >
      <Navbar />
      <Box w="100%" p="1rem 3rem" overflow="auto" position='relative'>
        {pathname !== "/" && (
          <IoIosArrowRoundBack
            style={{ display: "block", marginBottom: "2rem",fontSize:'2.5rem',cursor:'pointer' }}
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
