import React from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";
import Head from "next/head";

// export const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with NextJs",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "NextJs is a the React framework for production - it makes building fullstack React project easiler",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJs",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "NextJs is a the React framework for production - it makes building fullstack React project easiler",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJs",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "NextJs is a the React framework for production - it makes building fullstack React project easiler",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJs",
//     image: "getting-started-with-nextjs.png",
//     excerpt:
//       "NextJs is a the React framework for production - it makes building fullstack React project easiler",
//     date: "2022-02-10",
//   },
// ];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Runcong's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { featuredPosts },
    revalidate: 100,
  };
};

export default HomePage;
