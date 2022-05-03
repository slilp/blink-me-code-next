import React, { useState } from "react";
import Link from "next/link";
import { FaRegMoon, FaRegLightbulb, FaHamburger } from "react-icons/fa";
import { useTheme } from "next-themes";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="my-5">
      <div className="container grid grid-cols-2 lg:grid-cols-3 h-20 items-center mx-auto ">
        <Link href="/" passHref>
          <span className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-gray-200 to-indigo-500 cursor-pointer pl-2">
            Blink Me Code
          </span>
        </Link>
        <div className="hidden lg:flex justify-center">
          <ul className="flex flex-row gap-5 justify-center text-2xl">
            <li>
              <Link href="/" passHref>
                <span className="transition cursor-pointer hover:border-b-2 p-2 hover:border-black dark:hover:border-white">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <span className="transition cursor-pointer hover:border-b-2 p-2 hover:border-black dark:hover:border-white">
                  Blogs
                </span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref>
                <span className="transition cursor-pointer hover:border-b-2 p-2 hover:border-black dark:hover:border-white">
                  Portfolio
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className="transition cursor-pointer hover:border-b-2 p-2 hover:border-black dark:hover:border-white">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-end items-center">
          <button
            className="flex items-center justify-center text-xl w-12 h-12 rounded-full border-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white dark:border-gray-300 border-gray-600 hover:border-black dark:hover:border-white transition"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? (
              <FaRegLightbulb></FaRegLightbulb>
            ) : (
              <FaRegMoon></FaRegMoon>
            )}
          </button>
        </div>
        <div className="lg:hidden flex justify-end items-center gap-3 pr-2">
          <button
            className="flex items-center justify-center text-xl w-12 h-12 rounded-full border-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white dark:border-gray-300 border-gray-600 hover:border-black dark:hover:border-white transition"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
          >
            {theme === "light" ? (
              <FaRegLightbulb></FaRegLightbulb>
            ) : (
              <FaRegMoon></FaRegMoon>
            )}
          </button>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center justify-center text-xl w-12 h-12 rounded-full border-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white dark:border-gray-300 border-gray-600 hover:border-black dark:hover:border-white transition"
          >
            <FaHamburger></FaHamburger>
          </button>
        </div>
      </div>
      {open && (
        <div className="bg-transparent w-screen">
          <br></br>
          <div className="flex flex-col justify-center items-center text-2xl">
            <div className="border-t-2 border-b-2  border-gray-300 w-full h-14 flex items-center justify-center">
              <Link href="/" passHref>
                <span
                  className=" cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Home
                </span>
              </Link>
            </div>
            <div className="border-b-2  w-full h-14 border-gray-300 flex items-center justify-center">
              <Link href="/portfolio" passHref>
                <span
                  className=" cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </span>
              </Link>
            </div>
            <div className="border-b-2 w-full h-14 border-gray-300 flex items-center justify-center">
              <Link href="/blog" passHref>
                <span
                  className="cursor-pointer "
                  onClick={() => setOpen(false)}
                >
                  Blogs
                </span>
              </Link>
            </div>
            <div className="border-b-2 w-full h-14 border-gray-300 flex items-center justify-center">
              <Link href="/contact" passHref>
                <span
                  className="cursor-pointer "
                  onClick={() => setOpen(false)}
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
          <br></br>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
