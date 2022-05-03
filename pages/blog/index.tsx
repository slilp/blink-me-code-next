import React from "react";
import Image from "next/image";
import { BsCaretRightFill } from "react-icons/bs";

function Content() {
  return (
    <div>
      <p className="text-5xl text-center">
        My Creative <span className="text-indigo-500">Blog</span> Section{" "}
      </p>
      <br></br>
      <br></br>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <button className=" border-2 border-indigo-500 text-lg rounded-xl p-1 hover:opacity-90 hover:transition">
          <div className="bg-indigo-500 rounded-xl flex items-center justify-center gap-3 p-3">
            <Image
              src="/react_logo.png"
              alt="React"
              width={30}
              height={30}
              layout="fixed"
              className="rounded "
            ></Image>
            React
          </div>
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          <Image
            src="/nextjs_mini_logo.png"
            alt="Next.js"
            width={30}
            height={30}
            layout="fixed"
            className="rounded"
          ></Image>
          Next.js
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          <Image
            src="/nestjs_logo.svg"
            alt="Nest"
            width={30}
            height={30}
            layout="fixed"
            className="rounded "
          ></Image>
          Nest.js
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          <Image
            src="/nodejs.svg"
            alt="Node.js"
            width={30}
            height={30}
            layout="fixed"
            className="rounded"
          ></Image>
          Node.js
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          <Image
            src="/golang_logo.png"
            alt="Go"
            width={30}
            height={18.5}
            layout="fixed"
            className="rounded "
          ></Image>
          Go
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          <Image
            src="/btc.png"
            alt="Blockchain"
            width={30}
            height={30}
            layout="fixed"
            className="rounded "
          ></Image>
          Blockchain
        </button>
        <button className="flex items-center justify-center gap-3 border-2 border-indigo-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
          Other
        </button>
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
          <div
            key={item}
            className="relative text-black shadow-2xl rounded-xl dark:bg-gray-200 p-3"
            style={{ height: "425px" }}
          >
            <div className="relative h-40 w-full rounded-t-xl bg-red-600 mb-3"></div>
            <div className="h-6 flex gap-1 mb-3">
              <span className="bg-blue-100 rounded-full text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 dark:bg-blue-200 ">
                React
              </span>
              <span className="bg-blue-100 rounded-full text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 dark:bg-yellow-200 ">
                Blockchain
              </span>
            </div>
            <p className="text-xl">React Testing ตอนที่ 1</p>
            <p className="text-md text-gray-600">March 24th, 2022 </p>
            <p className="text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              omnis sed vel aspernatur mollitia exercitationem
            </p>
            <button className="text-gray-600 absolute bottom-2 left-3 flex items-center justify-center gap-2 text-md ">
              <Image
                src="/btc.png"
                alt="Blockchain"
                width={30}
                height={30}
                layout="fixed"
                className="rounded "
              ></Image>
              Slil.p
            </button>
            <button className="absolute bottom-2 right-2 text-white flex items-center justify-center gap-2 text-md bg-indigo-500 rounded-full p-1 hover:opacity-90 hover:transition w-32">
              Read
              <BsCaretRightFill></BsCaretRightFill>
            </button>
          </div>
        ))}
      </div>
      <div className="h-14"></div>
    </div>
  );
}

export default Content;
