import type { NextPage } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FcIdea, FcBriefcase, FcOk } from "react-icons/fc";
import {
  BsCaretRightFill,
  BsStar,
  BsPersonCircle,
  BsPinFill,
} from "react-icons/bs";
import Image from "next/image";

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
        <div className="flex flex-col justify-center order-2 md:order-1">
          <p className="text-3xl  lg:text-5xl">
            Hi, I am Blink. I am a Fullstack developer
          </p>
          <br></br>
          <p className="text-lg lg:text-xl font-thin">
            For official job I have 3 years experienced in full stack web
            development with ASP.NET Core. For my personal I am eager to learn
            new things in react web framework , API with node.js (express) and
            get some freelance job for real world project so I'm confident to
            work with them like my official skill too.
          </p>
          <br></br>
          <button className="flex items-center justify-center gap-3 text-lg lg:text-xl bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition w-96 ">
            <BsPersonCircle> </BsPersonCircle>
            Click to Download My Resume !
          </button>
        </div>
        <div className="mx-auto my-6 order-1 md:order-2">
          <img
            className="object-cover h-96 w-96"
            src="https://www.it24hrs.com/wp-content/uploads/2020/05/facebook-avatars-how-to-create-avatar-b.jpg"
          ></img>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex text-2xl gap-3 items-center my-5">
            <span>
              <FcBriefcase></FcBriefcase>
            </span>
            <span>Work Experience</span>
          </div>
          <div className="flex justify-center">
            <ol className="relative  border-l border-gray-200 dark:border-gray-700 w-3/4">
              <li className="mb-10 ml-10">
                <span className="flex absolute -left-2 z-10 bg-indigo-500 w-4 h-4 rounded-full "></span>
                <div className="my-2">
                  <Image
                    src="/refinitiv_logo.jpeg"
                    alt="Refinitiv"
                    width={250}
                    height={125}
                    layout="fixed"
                    className="rounded"
                  ></Image>
                </div>

                <h3 className="text-xl">Software Engineer</h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  2020-07 / Present
                </time>
                <br></br>
                <br></br>
                <ul className="list-disc">
                  <li>Work as Frontend developer</li>
                  <li>React , Redux , Jest</li>
                  <li>Building enterprise grade web application</li>
                  <li>Agile software development process </li>
                </ul>
              </li>
              <li className="mb-10 ml-10">
                <span className="flex absolute -left-2 z-10 bg-indigo-500 w-4 h-4 rounded-full "></span>
                <div className="my-2">
                  <Image
                    src="/hatari_logo.png"
                    alt="Hatari wireless"
                    width={225}
                    height={65}
                  ></Image>
                </div>
                <h3 className="text-xl">Software Engineer</h3>
                <time className="mb-1 text-sm leading-none text-gray-400">
                  2018-10 / 2020-06
                </time>
                <br></br>
                <br></br>
                <ul className="list-disc">
                  <li>Work as Fullstack developer</li>
                  <li>
                    Front End : React and ASP.NET Core MVC with javascript ,
                    jquery , css (boostrap)
                  </li>
                  <li>
                    Back End : RESTful API's ASP.NET Core with N-Tier
                    architecture ( data , business , presentation )
                  </li>
                  <li>Deploy docker containers on AWS.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="flex text-2xl gap-3 items-center my-5">
            <span>
              <FcBriefcase></FcBriefcase>
            </span>
            <span>Other Unofficial Experience</span>
          </div>
          <div className="flex justify-center">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 w-3/4">
              <li className="mb-10 ml-10">
                <span className="flex absolute -left-2 z-10 bg-indigo-500 w-4 h-4 rounded-full "></span>
                <div className="my-2">
                  <Image
                    src="/thai_logo.jpeg"
                    alt="Thairod"
                    width={200}
                    height={115}
                    layout="fixed"
                    className="rounded"
                  ></Image>
                </div>
                <p>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
                    Unofficial volunteer project
                  </span>
                </p>
                <h3 className="text-xl mt-4">Backend developer</h3>

                <br></br>
                <ul className="list-disc">
                  <li>Work as Backend developer</li>
                  <li>Express - Node.js (typescript)</li>
                  <li>
                    Project name : ไทยต้องรอด (web application for home
                    isolation)
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <br></br>
      <div className="flex text-2xl gap-3 items-center">
        <span>
          <FcOk></FcOk>
        </span>
        <span>My Blog & Portfolio</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-9">
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-xl p-5">
          <p
            className="text-6xl absolute"
            style={{ top: "-15px", right: "-15px", transform: "rotate(20deg)" }}
          >
            <BsPinFill></BsPinFill>
          </p>
          <br></br>
          <p className="text-3xl">
            Blogs <p className="font-thin">Knowledge reminding</p>
            <p className="font-thin">what I have learned.</p>
          </p>
          <Link href="/blog">
            <button className="flex items-center justify-center gap-2 text-md bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition w-44">
              See more
              <BsCaretRightFill> </BsCaretRightFill>
            </button>
          </Link>
        </div>
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-xl p-5">
          <p
            className="text-6xl absolute"
            style={{ top: "-15px", right: "-15px", transform: "rotate(20deg)" }}
          >
            <BsStar></BsStar>
          </p>
          <br></br>
          <p className="text-3xl">
            Portfolio <p className="font-thin">My personal projects</p>
          </p>
          <Link href="/portfolio">
            <button className="text-md flex items-center justify-center gap-2 bg-indigo-500 rounded-full p-4 hover:opacity-90 hover:transition w-44">
              See more
              <BsCaretRightFill> </BsCaretRightFill>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex text-2xl gap-3 items-center">
        <span>
          <FcIdea></FcIdea>
        </span>
        <span>Skill</span>
      </div>
      <br></br>
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="relative border-2 border-indigo-500 p-4 h-48 text-center">
          <div
            className="absolute -top-3 mx-0 left-1/2 bg-indigo-400 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            FrontEnd
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/react_logo.png"
                alt="React"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>React</p>
            </div>
            <div>
              <Image
                src="/nextjs_logo.png"
                alt="Next.js"
                width={100}
                height={100}
                layout="fixed"
                className="rounded"
              ></Image>
              <p>Next.js</p>
            </div>
            <div>
              <Image
                src="/redux_logo.png"
                alt="Redux"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Redux</p>
            </div>
          </div>
        </div>
        <div className="relative border-2 border-indigo-500 p-4 h-48 text-center">
          <div
            className="absolute -top-3 mx-0 left-1/2 bg-indigo-400 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Testing
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/jest_logo.png"
                alt="Jest"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Jest</p>
            </div>
          </div>
        </div>
        <div className="relative border-2 border-indigo-500 p-4 h-48 text-center">
          <div
            className="absolute -top-3 mx-0 left-1/2 bg-indigo-400 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            BackEnd
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/nodejs_logo.jpeg"
                alt="Node.js"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Node.js</p>
            </div>
            <div>
              <Image
                src="/express_logo.png"
                alt="Express"
                width={150}
                height={100}
                layout="fixed"
                className="rounded"
              ></Image>
              <p>Express.js</p>
            </div>
            <div>
              <Image
                src="/nestjs_logo.svg"
                alt="Nest"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Nest.js</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="relative border-2 border-indigo-500 p-4 h-48 text-center">
          <div
            className="absolute -top-3 mx-0 left-1/2 bg-indigo-400 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Development tools
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/jira_logo.png"
                alt="Jira"
                width={125}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Jira Software</p>
            </div>
            <div>
              <Image
                src="/postman_logo.png"
                alt="Postman"
                width={250}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Postman</p>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-indigo-500 p-4 h-48 text-center">
          <div
            className="absolute -top-3 mx-0 left-1/2 bg-indigo-400 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Database
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/sql_logo.jpeg"
                alt="sql"
                width={150}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>SQL server</p>
            </div>
            <div>
              <Image
                src="/mongo_logo.jpeg"
                alt="Mongo"
                width={100}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>MongoDB</p>
            </div>
            <div>
              <Image
                src="/mysql_logo.jpeg"
                alt="MySql"
                width={125}
                height={100}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>MySql</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-2xl gap-3 items-center">
        <span>
          <FcIdea></FcIdea>
        </span>
        <span>Skill I am interesting to learn</span>
      </div>
    </div>
  );
};

export default Home;
