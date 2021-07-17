import { Box, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'
const Card = ({title,snippet,link}) => {
  return (
    <Link href={`/` + link}>
      <a>
        <Box
          border="1px"
          borderColor="whiteAlpha.400"
          borderRadius="4px"
          bgColor="gray.900"
        >
          <img src="https://picsum.photos/300/200" width="100%" />
          <Heading size="md" m="1rem">
            {title}
          </Heading>
          <Text m="1rem">{snippet}</Text>
        </Box>
      </a>
    </Link>
  );
};

export default Card;
