import type { NextPage } from "next";
import Image from "next/image";
import { PortCard } from "components/organisms";
import { Tag } from "utils/enum";

const Portfolio: NextPage = () => {
  return (
    <div>
      <p className="text-5xl text-center font-bold my-10">
        Personal Project
        <span className=" ml-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-900">
          Portfolio
        </span>
      </p>
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        <button className="text-white border-2 border-blue-600 bg-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition">
          🚀 Full project
        </button>
        <button className="border-2 border-blue-600 text-lg rounded-xl p-3 px-6 hover:opacity-90 hover:transition">
          🚴 Mini project
        </button>
      </div>
      <PortCard
        id="wax"
        title="WAX game monitor"
        tags={[Tag.REACT, Tag.GO]}
        desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
       omnis sed vel aspernatur mollitia exercitationem"
        pic="/portfolio/wax_1.PNG"
        url="https://www.typescriptlang.org/docs/handbook/enums.html"
        link="/portfolio/waxgame"
      />
    </div>
  );
};

export default Portfolio;
