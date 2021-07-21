import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { GoCheck } from "react-icons/go";

const Navbar = () => {
  return (
    <Flex
      flexDir={["row", "row", "column", "column"]}
      alignItems={["space-evenly", "space-evenly", "center", "center"]}
      justifyContent="space-evenly"
      py={["1rem", "1rem", "0", "0"]}
      h={["4rem", "4rem", "100vh", "100vh"]}
      w={["100%", "100%", "4rem", "4rem"]}
      bgColor="#010102"
      borderRight="1px"
      borderRightColor="whiteAlpha.200"
      zIndex="10"
    >
      <Link href="/">
        <IconButton aria-label="Home" icon={<BiHomeAlt />} w="1rem" />
      </Link>

      <Link href="/graph">
        <IconButton aria-label="Home" icon={<GrGraphQl />} w="1rem" />
      </Link>
      <Link href="/checklist">
        <IconButton aria-label="Home" icon={<GoCheck />} w="1rem" />
      </Link>
    </Flex>
  );
};

export default Navbar;
