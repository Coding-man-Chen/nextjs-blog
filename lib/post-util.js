import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");
export const getFileNames = () => {
  return fs.readdirSync(postDirectory);
};
const getAllData = (fileName) => {
  const filePath = path.join(process.cwd(), "posts", fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const fileSlug = fileName.replace(/\.md$/, "");
  const postData = {
    slug: fileSlug,
    ...data,
    content,
  };
  return postData;
};
export const getAllPosts = () => {
  const fileNames = getFileNames();
  const allPosts = fileNames.map((fileName) => getAllData(fileName));
  const sortedPosts = allPosts.sort((postA, postB) => postA.date - postB.date);
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};

export const getPostData = (postIdentifier) => {
  const post = getAllData(`${postIdentifier}.md`);
  return post
};
