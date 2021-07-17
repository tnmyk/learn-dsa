import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <Flex
      bgColor="#010102"
      // bgColor="#050609"
      width="100%"
      h="100vh"
      overflow="hidden"
    >
      <Navbar/>
      <Box w="100%" p="2rem 3rem" overflow="auto">
        {children}
      </Box>
    </Flex>
    
  );
};

export default Layout;
