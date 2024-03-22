import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";
const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>Show all pages</title>
        <meta
          name="description"
          content="show all the tutorials and courses which I posted"
        />
      </Head>
      <AllPosts posts={props.allPosts} />
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
    revalidate: 100,
  };
};

export default AllPostsPage;
