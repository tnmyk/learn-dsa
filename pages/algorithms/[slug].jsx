import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from 'next/link'

const components = { Link };
const Algorithms = ({ content }) => {
  
  return (
    <div>

      <MDXRemote {...content} components={components} lazy />
    </div>
  );
};

export default Algorithms;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(join("data/algorithms"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  const file = fs.readFileSync(
    join("data/algorithms/" + slug + ".md"),
    "utf-8"
  );

   const mdxSource = await serialize(file);
   return { props: { content: mdxSource } };

};
