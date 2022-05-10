import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";

function Header() {
  const [show, setShow] = useState<boolean>(false);

  const download = async () => {
    setShow(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setShow(false);
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <p className="text-3xl  lg:text-5xl font-bold">Hi, I am Blink.</p>
        <p className="text-3xl  lg:text-5xl font-bold">
          I am a Software Engineer
        </p>
        <br></br>
        <p className="text-lg lg:text-xl font-thin">
          For official job I have 3 years experienced in full stack web
          development with ASP.NET Core. For my personal I am eager to learn new
          things in react web framework , API with node.js (express) and get
          some freelance job for real world project so I confident to work with
          them like my official skill too.
        </p>
        <br></br>
        <button
          onClick={download}
          className="flex text-white items-center justify-center gap-3 text-lg lg:text-xl bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-96"
        >
          <BsPersonCircle> </BsPersonCircle>
          Click to Download My Resume !
        </button>
        {/* <a href="/SLIL_PUANGPOOM_Resume.pdf" download>
          <button
            onClick={download}
            className="flex text-white items-center justify-center gap-3 text-lg lg:text-xl bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-96"
          >
            <BsPersonCircle> </BsPersonCircle>
            Click to Download My Resume !
          </button>
        </a> */}
      </div>
      <div className="mx-auto my-6 order-1 md:order-2">
        {show ? (
          <div className=" font-bold py-2 px-4 rounded mr-2 transition-all duration-500 ease-in-out">
            <Image
              src="/icon/mongo_logo.jpeg"
              alt="Mongo"
              width={350}
              height={350}
              layout="fixed"
              className="rounded "
            ></Image>
            <p>MongoDB</p>
          </div>
        ) : (
          <div className=" font-bold py-2 px-4 rounded mr-2 transition-all duration-500 ease-in-out">
            <Image
              src="/icon/sql_logo.jpeg"
              alt="sql"
              width={350}
              height={350}
              layout="fixed"
              className="rounded "
            ></Image>
            <p>SQL server</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
