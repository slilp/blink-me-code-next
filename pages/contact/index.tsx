import React from "react";
import { FaLinkedin, FaLine, FaGithub, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col gap-10 justify-center align-middle mt-10 text-center">
      <p className="text-5xl text-center font-bold my-10">
        Please Feel Free To
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-900 mx-2">
          Contact
        </span>
        Me
      </p>
      <div className="flex flex-col gap-10 items-center">
        <button
          onClick={() => {
            window.open("https://github.com/slilp", "_blank");
          }}
          className="text-white text-lg flex items-center justify-around gap-2 bg-blue-600 rounded-lg p-4 hover:opacity-90 hover:transition w-64"
        >
          <span className="text-3xl w-12">
            <FaGithub> </FaGithub>
          </span>
          <span className="w-12">GitHub</span>
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/slil-puangpoom-1926b5154",
              "_blank"
            );
          }}
          className="text-white text-lg flex items-center justify-around gap-2 bg-sky-600 rounded-lg p-4 hover:opacity-90 hover:transition w-64"
        >
          <span className="text-3xl w-12">
            <FaLinkedin> </FaLinkedin>
          </span>
          <span className="w-12">LinkedIn</span>
        </button>
        <button
          onClick={() => {
            window.open("https://line.me/ti/p/22KbxkgAoV", "_blank");
          }}
          className="text-white text-lg flex items-center justify-around gap-2 bg-green-600 rounded-lg p-4 hover:opacity-90 hover:transition w-64"
        >
          <span className="text-3xl w-12">
            <FaLine> </FaLine>
          </span>
          <span className="w-12">LINE</span>
        </button>
        <button className="text-white text-lg flex items-center justify-around gap-2 bg-pink-500 rounded-lg p-4 hover:opacity-90 hover:transition w-64">
          <span className="text-xl w-7 pl-3">
            <FaPhoneAlt> </FaPhoneAlt>
          </span>
          <span>0875006783</span>
        </button>
      </div>
    </div>
  );
}

export default Contact;
