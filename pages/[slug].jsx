import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Link from "next/link";
import { Heading } from "@chakra-ui/react";

const title = ({children})=>{
  return (
    <Heading fontWeight="md" fontSize={["2rem", "3rem", "4rem", "5rem"]}>
      {children}
    </Heading>
  );
}

const components = { Link,h1:title };

const SubPage = ({ content }) => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <MDXRemote {...content} components={components} lazy />
     
      
    </div>
  );
};

export default SubPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(join(process.cwd(), "data", "subpages"));
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const file = fs.readFileSync(
    join(process.cwd(), "data", "subpages", slug+ ".md"),
    "utf-8"
  );

  const mdxSource = await serialize(file);
  return { props: { content: mdxSource } };
};
