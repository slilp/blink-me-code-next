import React from "react";
import { FaLinkedin, FaLine, FaGithub, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col gap-10 justify-center align-middle mt-10 text-center">
      <p className="text-5xl text-center font-bold my-10">
        Please Feel Free To
        <span className=" mx-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-900">
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
          <span className="text-3xl">
            <FaGithub> </FaGithub>
          </span>
          GitHub
        </button>
        <button
          onClick={() => {
            window.open("https://www.linkedin.com", "_blank");
          }}
          className="text-white text-lg flex items-center justify-around gap-2 bg-sky-600 rounded-lg p-4 hover:opacity-90 hover:transition w-64"
        >
          <span className="text-3xl">
            <FaLinkedin> </FaLinkedin>
          </span>
          LinkedIn
        </button>
        <button
          onClick={() => {
            window.open("https://linevoom.line.me", "_blank");
          }}
          className="text-white text-lg flex items-center justify-around gap-2 bg-green-600 rounded-lg p-4 hover:opacity-90 hover:transition w-64"
        >
          <span className="text-3xl">
            <FaLine> </FaLine>
          </span>
          LINE
        </button>
        <button className="text-white text-lg flex items-center justify-around gap-2 bg-pink-500 rounded-lg p-4 hover:opacity-90 hover:transition w-64">
          <span className="text-xl">
            <FaPhoneAlt> </FaPhoneAlt>
          </span>
          087-500-6783
        </button>
      </div>
    </div>
  );
}

export default Contact;
