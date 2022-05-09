import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import portfolios, {
  PortfolioDetail,
  PortfolioList,
} from "views/Portfolio/Content/portfolios";
import { Tag } from "utils/enum";
interface PortfolioProps {
  title: string;
  desc: string;
  theme: string;
  tags: Tag[];
  pic: string;
  link: string;
  detail: PortfolioDetail[];
}

const PortfolioContent: NextPage<PortfolioProps> = ({
  title,
  desc,
  theme,
  tags,
  pic,
  link,
  detail,
}) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:h-96 h-80 rounded-xl">
        <div className="h-52 flex flex-col items-center gap-2 justify-center">
          <p className="text-3xl text-center font-bold">{title}</p>
          <p className="text-lg text-center">{desc}</p>
        </div>
      </div>
      <div
        className="w-3/4 h-52 lg:h-96 md:h-72 lg:w-1/2 mx-auto -mt-28 md:-mt-44 rounded-lg"
        style={{
          backgroundImage: `url("${pic}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="my-10 bg-gray-100 dark:bg-gray-700 rounded-xl py-4">
        <div className="flex gap-5 flex-wrap justify-center">
          {tags.map((tag) => (
            <div
              key={`tag-port-${tag}`}
              className="p-5 flex items-center justify-center rounded-full border-2 dark:border-white border-gray-500"
            >
              <Image
                src="/jest_logo.png"
                alt="React"
                width={50}
                height={50}
                layout="fixed"
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {detail.map((info, index) => (
          <div key={`feature-${index}`}>
            <Image
              src="/portfolio/wax_1.PNG"
              alt="Wax_game"
              width={350}
              height={250}
              layout="fixed"
              className="rounded-lg"
            ></Image>
            <p className="my-2 text-lg font-bold">{info.title} </p>
            <p className="my-2">{info.desc}</p>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
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
      detail: data.detail,
    },
  };
};
