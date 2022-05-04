import React from "react";
import Image from "next/image";

function Portfolio() {
  return (
    <div>
      <p className="text-5xl text-center">
        My Creative <span className="text-indigo-500">Blog</span> Section{" "}
      </p>
      <br></br>
      <br></br>
      <div className="flex justify-center gap-4">
        <button className="border-2 border-blue-600 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          🚀 Full project
        </button>
        <button className="border-2 border-blue-600 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          🚴 Mini project
        </button>
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-2">
        <div className="relative w-full h-full">
          <Image
            src="/portfolio/wax_1.PNG"
            alt="Wax_game"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="h-96">
          <div className="h-6 flex gap-1 mb-3">
            <span className="bg-blue-100 rounded-full text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 dark:bg-blue-200 ">
              React
            </span>
            <span className="bg-blue-100 rounded-full text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 dark:bg-yellow-200 ">
              Blockchain
            </span>
          </div>
          <br></br>
          <p className="text-4xl mb-2">WAX game monitor</p>
          <p className="text-lg">
            We provide useful services for the WAX gaming players where you can
            view the profit , planning your strategy and guiding how to play
            each game. We provide useful services for the WAX gaming players
            where you can view the profit , planning your strategy and guiding
            how to play each game.
          </p>
          <br></br>
          <button className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44">
            {"Let's Go 🚀"}
          </button>
          <button className="ml-3 text-lg border-2 border-blue-600 rounded-lg p-2 hover:bg-indigo-100 hover:transition w-44">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
