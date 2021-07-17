import fs from 'fs'
import {join} from 'path'
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Link from 'next/link'
const components = {Link}
const SortingAlgoPage = ({content}) => {
    return (
      <>
        <MDXRemote {...content} components={components} lazy />
      </>
    );
}
 
export default SortingAlgoPage;
export const getStaticProps = async()=>{
    const file = fs.readFileSync(join(process.cwd(),'data','algorithms','sorting-algorithms.md'),'utf-8')
    const mdxSource = await serialize(file);
    return {
      props: {
        content: mdxSource,
      },
    };

}