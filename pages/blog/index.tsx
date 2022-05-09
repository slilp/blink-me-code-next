import type { NextPage } from "next";
import { useState } from "react";
import { Menu, Content } from "views/Blog";
import { Tag } from "utils/enum";

const Blog: NextPage = () => {
  const [selectTag, setSelectTag] = useState<Tag | "All">("All");

  return (
    <div>
      <p className="text-5xl text-center font-bold my-10">
        Welcome to My
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-500 mx-2">
          Block
        </span>
        😀
      </p>
      <Menu searchTag={selectTag} setSelectTag={setSelectTag}></Menu>
      <Content searchTag={selectTag}></Content>
    </div>
  );
};

export default Blog;
