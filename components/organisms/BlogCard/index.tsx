import Image from "next/image";
import Link from "next/link";
import { BsCaretRightFill } from "react-icons/bs";
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
    <div
      key={id}
      className="relative text-black shadow-2xl rounded-xl dark:bg-gray-200 p-3 cursor-pointer"
      style={{ height: "425px" }}
    >
      <div
        style={{
          backgroundImage: `url("${pic}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative h-40 w-full rounded-t-xl mb-3"
      ></div>
      <div className="h-6 flex gap-1 mb-3">
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
      <button className="text-gray-600 absolute bottom-2 left-3 flex items-center justify-center gap-2 text-md ">
        <Image
          src="/btc.png"
          alt="Blockchain"
          width={30}
          height={30}
          layout="fixed"
          className="rounded "
        ></Image>
        {creator}
      </button>
      <Link href={link} passHref>
        <button className="absolute bottom-2 right-2 text-white flex items-center justify-center gap-2 text-md bg-indigo-500 rounded-full p-1 hover:opacity-90 hover:transition w-32">
          Read
          <BsCaretRightFill></BsCaretRightFill>
        </button>
      </Link>
    </div>
  );
}

export default BlogCard;
