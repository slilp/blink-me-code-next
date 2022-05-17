import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import portfolios, { PortfolioDetail, PortfolioList } from "config/portfolios";
import { Tag } from "utils/enum";
import { FaGithub } from "react-icons/fa";
interface PortfolioProps {
  title: string;
  desc: string;
  theme: string;
  tags: Tag[];
  pic: string;
  link: string;
  git: string;
  detail: PortfolioDetail[];
}

const PortfolioContent: NextPage<PortfolioProps> = ({
  title,
  desc,
  theme,
  tags,
  git,
  pic,
  link,
  detail,
}) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:h-96 h-80 rounded-xl">
        <div className="h-52 flex flex-col items-center gap-2 justify-center">
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
          <p className="text-3xl text-center font-bold text-white">{title}</p>
          <p className="text-lg text-center text-white">{desc}</p>
        </div>
      </div>
      <div
        className="w-3/4 h-52 lg:h-96 md:h-72 lg:w-1/2 mx-auto -mt-28 md:-mt-44 rounded-lg"
        style={{
          backgroundImage: `url("${pic}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          imageRendering: "-webkit-optimize-contrast",
        }}
      ></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
        {detail.map((info, index) => (
          <div key={`feature-${index}`}>
            <Image
              src={`/portfolio/${info.pic}`}
              alt={info.title}
              width={350}
              height={225}
              layout="fixed"
              className="rounded-lg"
            ></Image>
            <p className="my-2 text-lg font-bold">{info.title} </p>
            <p className="my-2">{info.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44"
        >
          {"Let's Go 🚀"}
        </button>
      </div>
      <br></br>
      {git !== "" && (
        <button
          onClick={() => {
            window.open(git, "_blank");
          }}
          className="text-white  mx-auto text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44 flex justify-around items-center"
        >
          <span>
            <FaGithub></FaGithub>
          </span>
          <span>Github</span>
        </button>
      )}
    </div>
  );
};

export default PortfolioContent;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPath = portfolios.map((portfolio) => ({
    params: { id: portfolio.more },
  }));
  return {
    paths: allPath,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
const PORTFOLIO_URL = "/portfolio/";

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const data = portfolios.find((item) => item.more === id) as PortfolioList;
  return {
    props: {
      title: data.title,
      desc: data.desc,
      pic: `/portfolio/${data.pic}`,
      theme: data.theme,
      tags: data.tags,
      link: data.link,
      git: data.git,
      detail: data.detail,
    },
  };
};
