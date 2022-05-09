import React from "react";
import { BsPersonCircle } from "react-icons/bs";

function Header() {
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
        <button className="flex text-white items-center justify-center gap-3 text-lg lg:text-xl bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-96">
          <BsPersonCircle> </BsPersonCircle>
          Click to Download My Resume !
        </button>
      </div>
      <div className="mx-auto my-6 order-1 md:order-2"></div>
    </div>
  );
}

export default Header;
