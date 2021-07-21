import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { Box, Button, Heading } from "@chakra-ui/react";
import { AiTwotoneCopy } from "react-icons/ai";
import Image from "next/image";

const components = { Link };
const Algorithms = ({ content, title, topic, code }) => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Heading
        textTransform="capitalize"
        mb="3rem"
        fontWeight="500"
        fontSize={["2rem", "3rem", "4rem", "5rem"]}
      >
        {title}
      </Heading>
      <div>
        <MDXRemote {...content} components={components} lazy />
      </div>
      <Box
        w={["95%", "95%", "95%", "65%"]}
        h="max-content"
        my="2rem"
        mx="auto"
        position="relative"

      >
        <Box
          borderRadius="15px"
          overflow="hidden"
          width="100%"
          minHeight={["10rem", "14rem", "20rem", "20rem"]}
          margin="1rem auto"
        >
          <Image
            alt="Mountains"
            src={`/code/${topic}.png`}
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Button
          colorScheme="yellow"
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
          variant="outline"
          position="absolute"
          right="1rem"
        >
          Copy Code <AiTwotoneCopy style={{ marginLeft: "0.3rem" }} />
        </Button>
      </Box>
    </div>
  );
};

export default Algorithms;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(join(process.cwd(), "data", "algorithms"));

  const paths = files.map((file) => ({
    params: {
      topic: file.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { topic } }) => {
  const file = fs.readFileSync(
    join(process.cwd(), "data", "algorithms", topic + ".md"),
    "utf-8"
  );
  const code = fs.readFileSync(
    join(process.cwd(), "data", "code", topic + ".md"),
    "utf-8"
  );

  const mdxSource = await serialize(file);
  // const codeSource = await serialize(code);
  return {
    props: {
      content: mdxSource,
      title: topic.replace("-", " "),
      topic: topic,
      // code: codeSource,
      code: code,
    },
  };
};
