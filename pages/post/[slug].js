import React from "react";
import PostContent from "../../components/posts/post-item/post-content";
import { getFileNames, getPostData } from "../../lib/post-util";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = getPostData(slug);
  return {
    props: { post },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const fileNames = getFileNames();
  const slugs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return {
      params: { slug },
    };
  });
  return {
    paths: slugs,
    fallback: false,
  };
};

export default PostDetailPage;
