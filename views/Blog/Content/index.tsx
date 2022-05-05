import React from "react";
import { BlogCard } from "components/organisms";
import { Tag } from "utils/enum";

function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 font-kanit my-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
        <BlogCard
          key={item}
          id={item}
          title="React"
          tags={[Tag.REACT, Tag.GO]}
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        omnis sed vel aspernatur mollitia exercitationem"
          pic=""
          creator="Slil.P"
          published="March 24th, 2022"
          link="/blog/test"
        />
      ))}
    </div>
  );
}

export default Content;
