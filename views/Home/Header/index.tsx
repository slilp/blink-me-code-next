import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";

function Header() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <p className="text-3xl  lg:text-5xl font-bold">Hi, I am Blink.</p>
        <p className="text-3xl  lg:text-5xl font-bold">
          I am a Software Engineer
        </p>
        <br></br>
        <p className="text-lg lg:text-xl font-thin mb-5 ">
          I have 4 years experienced in web development with passionate in full
          stack development. My tech stacks are React.js + Node.js (present) or
          React + .NET Core. But I open to learn new technology other than in my
          official job and building my own projects.
        </p>
        <br></br>

        <button className=" text-white  text-lg lg:text-xl bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-96">
          <a
            href="/SLIL_PUANGPOOM_Resume.pdf"
            download
            className="flex  items-center justify-center gap-3 m-0 w-full h-full"
          >
            <BsPersonCircle> </BsPersonCircle>
            Click to Download My Resume !
          </a>
        </button>
      </div>
      <div className="mx-auto my-6 order-1 md:order-2">
        <Image
          src="/home_header.jpg"
          alt="home"
          width={400}
          height={300}
          layout="fixed"
          className="rounded "
        ></Image>
      </div>
    </div>
  );
}

export default Header;
