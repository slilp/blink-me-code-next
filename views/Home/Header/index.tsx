import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Image from "next/image";

function Header() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <p className="text-3xl  lg:text-5xl font-bold">Hi, I am Blink.</p>
        <p className="text-3xl  lg:text-5xl font-bold">
          I am a Software Engineer
        </p>
        <br></br>
        <p className="text-lg lg:text-xl font-thin mb-5 ">
          I have 5 years experienced in software development both frontend and
          backend with modern technology stack like React.js / Next.js / Golang.
        </p>
        <br></br>
        <a
          type="button"
          href="/SLIL_PUANGPOOM_Resume.pdf"
          download
          className="text-white flex items-center gap-3 justify-center text-lg lg:text-xl bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-full  lg:w-3/4"
        >
          <BsPersonCircle> </BsPersonCircle>
          Click to Download My Resume !
        </a>
      </div>
      <div className="my-3 order-1 md:order-2 flex items-center justify-center">
        <Image
          priority
          src="/home_header.jpg"
          alt="home"
          width={370}
          height={300}
          layout="fixed"
          className="rounded "
        ></Image>
      </div>
    </div>
  );
}

export default Header;
