import React from "react";
import { BlogCard } from "components/organisms";
import { Tag } from "utils/enum";
import posts, { PostDetail } from "./posts";
import { FaRegGrinBeamSweat } from "react-icons/fa";

interface ContentProp {
  searchTag?: Tag | "All";
}

function Content({ searchTag }: ContentProp) {
  const data = posts.filter((blog) =>
    searchTag !== "All" && searchTag !== undefined
      ? blog.tags.includes(searchTag)
      : true
  );

  if (data.length === 0)
    return (
      <div className="flex items-center justify-center h-96 text-3xl font-bold gap-3">
        <FaRegGrinBeamSweat></FaRegGrinBeamSweat>NOT FOUND
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 font-kanit my-10">
      {data.map((item: PostDetail) => (
        <BlogCard
          key={item.id}
          id={item.id}
          title={item.title}
          tags={item.tags}
          desc={item.desc}
          pic={item.pic}
          creator={item.creator}
          published={item.published}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Content;
