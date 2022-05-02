import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FcIdea } from "react-icons/fc";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [mouted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mouted) return null;

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
        <div className="flex flex-col justify-center">
          <p className="text-3xl  font-bold lg:text-5xl">
            Hi, I am Blink. I am a fullstack developer
          </p>
          <br></br>
          <p className="text-md lg:text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            ad quam ab laborum, officia doloremque qui architecto magni eaque
            iure non unde nisi assumenda provident laboriosam! Non deleniti
            aperiam quae?
          </p>
          <br></br>
          <button className="bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition font-bold w-96">
            Click to download My resume
          </button>
        </div>
        <div className="mx-auto my-6">
          <img className="object-cover h-96 w-96" src="/favicon.ico"></img>
        </div>
      </div>
      <div>My experience</div>
      <p className="text-3xl font-bold my-10">See more about me</p>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-9">
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-lg p-5">
          <p className="text-5xl absolute top-0 left-0">
            <FcIdea></FcIdea>
          </p>
          <br></br>
          <p className="text-xl lg:text-3xl">
            Blogs <p className="font-thin">Lorem ipsum dolor sit amet</p>
            <p className="font-thin">consectetur adipisicing elit.</p>
          </p>
          <button className="bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition font-bold  w-44">
            See more
          </button>
        </div>
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-lg p-5">
          <p className="text-5xl absolute top-0 left-0">
            <FcIdea></FcIdea>
          </p>
          <br></br>
          <p className="text-xl lg:text-3xl">
            Portfolio <p className="font-thin">Lorem ipsum dolor sit amet</p>
            <p className="font-thin">consectetur adipisicing elit.</p>
          </p>
          <button className="bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition font-bold w-44">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
