import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

const components = { Link };
const Algorithms = ({ content, title, topic, code }) => {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2 style={{ textTransform: "capitalize", marginBottom: "5rem" }}>
        {title}
      </h2>
      <div>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "2rem",
            margin: "2rem auto",
            width: "max-content",
          }}
        >
          <MDXRemote {...code} lazy />
        </div>
        <MDXRemote {...content} components={components} lazy />
      </div>

      <div
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          width: "60%",
          margin: "3rem auto",
        }}
      >
        <img src={`/code/${topic}.png`} width="100%" />
      </div>
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
  const codeSource = await serialize(code);
  return {
    props: {
      content: mdxSource,
      title: topic.replace("-", " "),
      topic: topic,
      code: codeSource,
    },
  };
};
