import React from "react";
import Image from "next/image";
import { BsStar } from "react-icons/bs";

function PortfolioContent() {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:h-96 h-80 rounded-xl">
        <div className="h-52 flex flex-col items-center gap-2 justify-center">
          <p className="text-3xl text-center">WAX game monitor</p>
          <p className="text-lg text-center">Game changer</p>
        </div>
      </div>
      <div className="w-full md:w-3/4 mx-auto -mt-28 md:-mt-44">
        <img
          className="mx-auto rounded-lg"
          style={{ width: "75%" }}
          src="/portfolio/wax_1.PNG"
        ></img>
      </div>
      <div className="my-10 bg-gray-100 dark:bg-gray-700 rounded-xl py-10">
        <div className="flex gap-5 flex-wrap justify-center">
          <div className="h-24 w-24 flex items-center justify-center rounded-full border-2 dark:border-white border-gray-500">
            <Image
              src="/jest_logo.png"
              alt="React"
              width={50}
              height={50}
              layout="fixed"
            ></Image>
          </div>
          <div className="h-24 w-24 flex items-center justify-center bg-white rounded-full">
            <Image
              src="/jest_logo.png"
              alt="React"
              width={50}
              height={50}
              layout="fixed"
            ></Image>
          </div>
          <div className="h-24 w-24 flex items-center justify-center bg-white rounded-full">
            <Image
              src="/jest_logo.png"
              alt="React"
              width={50}
              height={50}
              layout="fixed"
            ></Image>
          </div>
          <div className="h-24 w-24 flex items-center justify-center bg-white rounded-full">
            <Image
              src="/jest_logo.png"
              alt="React"
              width={50}
              height={50}
              layout="fixed"
            ></Image>
          </div>
          <div className="h-24 w-24 flex items-center justify-center bg-white rounded-full">
            <Image
              src="/jest_logo.png"
              alt="React"
              width={50}
              height={50}
              layout="fixed"
            ></Image>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="relative w-full h-96">
          <Image
            src="/portfolio/wax_1.PNG"
            alt="Wax_game"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="flex items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          soluta ullam quos minus necessitatibus dolore laboriosam veniam
          voluptas suscipit blanditiis ex voluptatum ratione officiis ad nulla
          obcaecati eos doloremque saepe?
        </div>
        <div className="flex items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          soluta ullam quos minus necessitatibus dolore laboriosam veniam
          voluptas suscipit blanditiis ex voluptatum ratione officiis ad nulla
          obcaecati eos doloremque saepe?
        </div>
        <div className="relative w-full h-96">
          <Image
            src="/portfolio/wax_1.PNG"
            alt="Wax_game"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <div className="relative w-full h-96">
          <Image
            src="/portfolio/wax_1.PNG"
            alt="Wax_game"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="flex items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          soluta ullam quos minus necessitatibus dolore laboriosam veniam
          voluptas suscipit blanditiis ex voluptatum ratione officiis ad nulla
          obcaecati eos doloremque saepe?
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="text-center">
        <button className="text-white  text-lg bg-blue-600 rounded-lg p-2 hover:opacity-90 hover:transition w-44">
          {"Let's Go 🚀"}
        </button>
      </div>
    </div>
  );
}

export default PortfolioContent;
