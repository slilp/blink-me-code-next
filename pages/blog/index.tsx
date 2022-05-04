import type { NextPage } from "next";
import { Menu, Content } from "views/Blog";

const Blog: NextPage = () => {
  return (
    <div>
      <p className="text-5xl text-center font-bold my-10">
        Welcome to My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-500">
          Block
        </span>{" "}
        😀
      </p>
      <Menu></Menu>
      <Content></Content>
    </div>
  );
};

export default Blog;
