import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, slug, date } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath =`/post/${slug}`
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
