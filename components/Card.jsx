import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
const Card = ({ title, snippet, link }) => {
  return (
    <Link href={`/` + link}>
      <a>
        <Box
          border="1px"
          borderColor="gray.700"
          borderRadius="8px"
          overflow="hidden"
          bgColor="gray.900"
          h="100%"
          // minH="340px"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          {" "}
          <img
            src={"/cards/" + title.replace(/\s/g, "-").toLowerCase() + ".png"}
            width="100%"
          />
          <h5 style={{ margin: "0 1rem", marginTop: "1rem" }}>{title}</h5>
          <div style={{minHeight:'90px'}}>
            <Text m="0.3rem 1rem" mb="1rem" fontSize="0.9rem">
            {snippet}
          </Text>
          </div>
          
          
        </Box>
      </a>
    </Link>
  );
};

export default Card;
