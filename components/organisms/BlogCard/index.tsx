import Image from "next/image";
import Link from "next/link";
import { Tag } from "utils/enum";
export interface BlogCardProps {
  id: string;
  title: string;
  tags: Tag[];
  desc: string;
  pic: string;
  creator: string;
  published: string;
  link: string;
}

const PORTFOLIO_URL = "/blog/";

function BlogCard({
  id,
  title,
  tags,
  desc,
  pic,
  creator,
  published,
  link,
}: BlogCardProps) {
  return (
    // <Link href={link} passHref>
    <div
      key={id}
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="p-2 relative cursor-pointer border-2 border-transparent rounded-xl transition duration-200 hover:border-sky-500"
      style={{ minHeight: "375px" }}
    >
      <div className="relative h-40 w-full rounded-xl mb-3">
        <Image src={pic} layout="fill" objectFit="contain"></Image>
      </div>
      <div className="h-6 flex gap-1 my-5">
        {tags.map((tag: Tag) => (
          <div
            key={`blog-card-${tag}`}
            className="bg-gray-100 dark:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg p-2 flex items-center"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="text-xl">{title}</p>
      <p className="text-md text-gray-600">{published}</p>
      <p className="text-base text-gray-500">{desc}</p>
    </div>
    // </Link>
  );
}

export default BlogCard;
