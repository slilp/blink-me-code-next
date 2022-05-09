import React from "react";
import type { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";

interface PostProps {
  source: MDXRemoteSerializeResult;
}

const Callout = ({ children }: any) => (
  <div className="bg-red-500">{children}</div>
);

const components = {
  // ... All my other components
  Callout,
};

const Post: NextPage<PostProps> = ({ source }) => {
  return (
    <article className="font-kanit text-lg dark:text-white w-full md:w-3/4 mx-auto prose max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllPosts = fs.readdirSync(path.join(process.cwd(), "_posts"));
  const allPath = getAllPosts.map((filename: any) => ({
    params: { post: filename.replace(".mdx", "") },
  }));
  return {
    paths: allPath,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  post: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = context.params as IParams;
  const rawFileSource = fs.readFileSync(
    path.join(process.cwd(), `_posts/${post}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(rawFileSource);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
    },
  };
};
