import React from "react";
import PostsGrid from "./posts-grid";
import classes from './all-posts.module.css'
import { DUMMY_POSTS } from "../../pages";

const AllPosts = ({posts}) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts}/>
    </section>
  );
};

export default AllPosts;
