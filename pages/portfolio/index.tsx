import { useState } from "react";
import type { NextPage } from "next";
import { PortfolioType } from "utils/enum";
import { Content } from "views/Portfolio";

const Portfolio: NextPage = () => {
  const [selectSearch, setSearch] = useState<PortfolioType>(PortfolioType.FULL);

  return (
    <div>
      <p className="text-5xl text-center font-bold my-10">
        Personal{" "}
        <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900">
          Projects
        </span>
      </p>

      <div className="flex justify-center gap-4 my-10 flex-wrap">
        <button
          className={
            selectSearch === PortfolioType.FULL
              ? "text-white border-2 border-blue-600 bg-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
              : "border-2 border-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
          }
          onClick={() => setSearch(PortfolioType.FULL)}
        >
          🚀 Full project
        </button>
        <button
          className={
            selectSearch === PortfolioType.MINI
              ? "text-white border-2 border-blue-600 bg-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
              : "border-2 border-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
          }
          onClick={() => setSearch(PortfolioType.MINI)}
        >
          🚴 Mini project
        </button>
      </div>
      <Content search={selectSearch} />
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        <button
          className={
            selectSearch === PortfolioType.FULL
              ? "text-white border-2 border-blue-600 bg-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
              : "border-2 border-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
          }
          onClick={() => setSearch(PortfolioType.FULL)}
        >
          🚀 Full project
        </button>
        <button
          className={
            selectSearch === PortfolioType.MINI
              ? "text-white border-2 border-blue-600 bg-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
              : "border-2 border-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition"
          }
          onClick={() => setSearch(PortfolioType.MINI)}
        >
          🚴 Mini project
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
