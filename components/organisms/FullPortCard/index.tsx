import { PortfolioDetail } from "config/portfolios";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { Tag } from "utils/enum";

interface FullPortCardProps {
  id: string;
  title: string;
  tags: Tag[];
  desc: string;
  pic: string;
  link: string;
  fromColor: string;
  toColor: string;
  git: string;
  details: PortfolioDetail[];
}

function FullPortCard({
  id,
  title,
  tags,
  fromColor,
  toColor,
  desc,
  pic,
  link,
  details,
  git,
}: FullPortCardProps) {
  const bgColorClass = `bg-gradient-to-r from-${fromColor} to-${toColor} md:h-96 h-80 rounded-xl p-4`;

  return (
    <div className="my-8">
      {/* <div className="bg-gradient-to-r from-emerald-500 to-lime-500 h-80"></div>
      <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-80"></div> */}

      <div className={bgColorClass}>
        <div className="flex gap-5 flex-wrap justify-center">
          {tags.map((tag) => (
            <div
              key={`blog-card-${tag}`}
              className="bg-gray-100 text-black text-sm font-medium rounded-lg px-3 py-1 flex items-center"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-3xl text-center font-bold text-white my-3">
          {title}
        </p>
        <p className="text-lg text-center text-white my-3">{desc}</p>
      </div>
      <div
        className="w-3/4 h-52 lg:h-96 md:h-72 lg:w-1/2 mx-auto -mt-16 md:-mt-56 rounded-lg"
        style={{
          backgroundImage: `url("${pic}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          imageRendering: "-webkit-optimize-contrast",
        }}
      />
      <div className="text-center my-3 flex gap-4 justify-center">
        <button
          onClick={() => {
            window.open(git, "_blank");
          }}
          className="flex gap-3 align-middle justify-center text-lg border-2 border-green-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          <FaGithub className="mt-1" /> {"Github"}
        </button>
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-white  text-lg bg-green-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          {"Live Preview 🎉"}
        </button>
      </div>
      <p className="block md:hidden">* Scroll to see more features</p>
      <div className="flex overflow-x-auto gap-4 mt-3">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex-1 min-w-fit md:min-w-0 shadow-lg rounded-lg p-3 dark:bg-gray-700 "
          >
            <p className="font-bold text-lg my-2">{detail.title}</p>
            <p className="text-md">{detail.desc}</p>
            <div className="text-center my-2">
              {detail.pic && (
                <Image
                  alt="dashboard-2"
                  height="150"
                  width="300"
                  src={detail.pic}
                  style={{ borderRadius: "0.5rem" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center my-3 flex gap-4 justify-center">
        <button
          onClick={() => {
            window.open(git, "_blank");
          }}
          className="flex gap-3 align-middle justify-center text-white  text-lg bg-gray-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          <FaGithub className="mt-1" /> {"Github"}
        </button>
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-white text-lg bg-green-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          {"Live Preview 🎉"}
        </button>
      </div> */}
    </div>
  );
}

export default FullPortCard;
