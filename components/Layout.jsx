import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
const Layout = ({ children }) => {
  return (
    <Flex
      bgColor="#010102"
      // bgColor="#050609"
      width="100%"
      h="100vh"
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="space-evenly"
        h="100vh"
        w="4rem"
        bgColor="#010102"
        borderRight="1px"
        borderRightColor="whiteAlpha.200"
        zIndex="10"
      >
        <Link href="/">
          <Tooltip label="Home" placement="right">
            <IconButton aria-label="Home" icon={<BiHomeAlt />} w="1rem" />
          </Tooltip>
        </Link>

        <Link href="/graph">
          <Tooltip label="Graph" placement="right">
            <IconButton aria-label="Graph" icon={<GrGraphQl />} w="1rem" />
          </Tooltip>
        </Link>
        <IconButton aria-label="Home" icon={<BiHomeAlt />} w="1rem" />
      </Flex>
      <Box w="100%" p="2rem 3rem" overflow="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
