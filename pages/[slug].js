import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Link from "next/link";

const components = { Link };
const SubPage = ({ content }) => {
  return (
    <div>
      <MDXRemote {...content} components={components} lazy />
    </div>
  );
};

export default SubPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(join("data/subpages"));

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
  const file = fs.readFileSync(join("data/subpages/" + slug + ".md"), "utf-8");

  const mdxSource = await serialize(file);
  return { props: { content: mdxSource } };
};
