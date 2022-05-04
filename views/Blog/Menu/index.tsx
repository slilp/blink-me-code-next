import React from "react";
import Image from "next/image";

function Menu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 my-10">
      <button className="flex items-center justify-center gap-3 border-2 border-blue-500 text-lg rounded-xl p-3 hover:opacity-90 hover:transition">
        <Image
          src="/react_logo.png"
          alt="React"
          width={30}
          height={30}
          layout="fixed"
          className="rounded "
        ></Image>
        React
      </button>
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
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
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
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
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
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
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
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
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
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
      <button className="flex items-center justify-center gap-3  text-lg rounded-xl p-3 transition-all hover:border-2 hover:border-blue-500">
        Other
      </button>
    </div>
  );
}

export default Menu;
