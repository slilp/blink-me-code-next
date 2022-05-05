import Image from "next/image";
import Link from "next/link";
import { Tag } from "utils/enum";

export interface PortCardProps {
  id: string;
  title: string;
  tags: Tag[];
  desc: string;
  pic: string;
  url: string;
  link: string;
}

function PortCard({ id, title, tags, desc, pic, url, link }: PortCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="mx-auto">
        <Image
          src={pic}
          alt={title}
          width={300}
          height={150}
          layout="fixed"
          className="rounded "
        ></Image>
      </div>
      <div className="h-96">
        <div className="h-6 flex gap-1 mb-3">
          {tags.map((tag: Tag) => (
            <span
              key={`post-card-${tag}`}
              className="bg-blue-100 rounded-full text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 dark:bg-yellow-200 "
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-3xl mb-2">{title}</p>
        <p className="text-md">{desc}</p>
        <br></br>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:w-1/2 gap-2">
          <button
            onClick={() => {
              window.open(url, "_blank");
            }}
            className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44 mx-auto lg:mx-0"
          >
            {"Let's Go 🚀"}
          </button>
          <Link href={link} passHref>
            <button className="text-lg border-2 border-blue-600 rounded-lg p-2 hover:opacity-80 hover:transition w-44 mx-auto lg:mx-0">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortCard;
