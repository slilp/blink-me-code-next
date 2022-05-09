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
  const PORTFOLIO_URL = "/portfolio/";

  return (
    <div
      key={id}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 md:my-10"
    >
      <div
        className="w-full lg:w-3/4 lg:h-80 h-64 rounded-lg mx-auto"
        style={{
          backgroundImage: `url("${pic}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="h-64">
        <div className="h-6 flex gap-2 mb-3 justify-center md:justify-start">
          {tags.map((tag: Tag) => (
            <div
              key={`tag-port-${tag}`}
              className="bg-gray-100 dark:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg p-2 flex items-center"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-2xl mb-2 font-bold text-center md:text-left">
          {title}
        </p>
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
          <Link href={PORTFOLIO_URL + link} passHref>
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
