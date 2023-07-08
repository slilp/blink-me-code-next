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
  details: PortfolioDetail[];
}

function FullPortCard({
  id,
  title,
  tags,
  desc,
  pic,
  link,
  details,
}: FullPortCardProps) {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:h-96 h-80 rounded-xl p-4">
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
      <div className="text-center my-3">
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          {"Let's Go 🚀"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="shadow-lg rounded-lg p-3 dark:bg-gray-700 "
          >
            <p className="font-bold text-lg my-2">{detail.title}</p>
            <p className="text-md">{detail.desc}</p>
            <div className="text-center my-2">
              <Image
                alt="dashboard-2"
                height="150"
                width="300"
                src={detail.pic}
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-3">
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          {"Live Preview 🚀"}
        </button>
      </div>
    </div>
  );
}

export default FullPortCard;
