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
          minH="380px"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <div style={{height:'60%',overflow:'hidden'}}>
            <img
              src={"/cards/" + title.replace(/\s/g, "-").toLowerCase() + ".png"}
              width="100%"
            />
          </div>

          <Heading size="md" m="1rem">
            {title}
          </Heading>
          <Text m="1rem 1.5rem">{snippet}</Text>
        </Box>
      </a>
    </Link>
  );
};

export default Card;
