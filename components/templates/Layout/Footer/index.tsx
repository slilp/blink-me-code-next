import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="my-10 bg-transparent mx-4">
      <hr className="my-6 dark:border-white border-gray-700 lg:my-8" />

      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-1 grid md:grid-cols-3 grid-cols-1">
            <div className="mb-6 md:mb-0 md:mx-0 mx-auto">
              <span className="font-bold text-3xl">Blink Me Code</span>
              <br></br>
            </div>
            <div className="hidden md:flex justify-center items-center text-xl">
              1 % Better Every Day 🚀
            </div>
            <div className="flex flex-row md:flex-col text-xl gap-3 justify-center md:items-end">
              <Link href="/blog">Blog</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <span className="hidden md:block text-sm">
          © 2022 . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
      </div>
    </footer>
  );
}

export default Footer;
