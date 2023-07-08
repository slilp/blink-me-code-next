import Image from "next/image";
import { FcBriefcase } from "react-icons/fc";

function Experience() {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex text-2xl gap-3 justify-center my-5 font-semibold just">
        <span>
          <FcBriefcase></FcBriefcase>
        </span>
        <span>Work Experience</span>
      </div>
      <div className="flex justify-center">
        <div className="w-72">
          <ol className="relative  border-l border-gray-600 dark:border-gray-200">
            <li className="mb-10 ml-10">
              <span className="flex absolute -left-2 z-10 bg-blue-600 w-4 h-4 rounded-full "></span>
              <div className="relative h-36 w-56 rounded-lg mb-5 border-2 border-blue-300 dark:border-none">
                <Image
                  src="/ascend_logo.jpeg"
                  alt="Refinitiv"
                  layout="fill"
                  objectFit="fill"
                  className="rounded-lg"
                ></Image>
              </div>
              <div className="relative w-full h-full"></div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 p-1 rounded-lg ">
                Full Time
              </span>
              <h3 className="text-xl mt-4">Senior Software Engineer</h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2022-07 / Present
              </time>
              <br></br>
              <br></br>
              <ul className="list-disc">
                <li>Next.js, React , Redux , Jest</li>
                <li>Design system with storybook</li>
                <li>Web3 , DApp</li>
                <li>Blockchain projects</li>
              </ul>
            </li>
            <li className="mb-10 ml-10">
              <span className="flex absolute -left-2 z-10 bg-blue-600 w-4 h-4 rounded-full "></span>
              <div className="relative h-36 w-56 rounded-lg mb-5 border-2 border-blue-300 dark:border-none">
                <Image
                  src="/refinitiv_logo.jpeg"
                  alt="Refinitiv"
                  layout="fill"
                  objectFit="fill"
                  className="rounded-lg"
                ></Image>
              </div>
              <div className="relative w-full h-full"></div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 p-1 rounded-lg ">
                Full Time
              </span>
              <h3 className="text-xl mt-4">Software Engineer</h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                2021-07 / 2021-06
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
              <span className="flex absolute -left-2 z-10 bg-blue-600 w-4 h-4 rounded-full "></span>
              <div className="relative h-24 w-60 bg-sky-600 rounded-lg mb-5 ">
                <Image
                  src="/hatari_logo.png"
                  alt="Hatari wireless"
                  layout="fill"
                  objectFit="fill"
                  className="rounded-lg"
                ></Image>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 p-1 rounded-lg ">
                Full Time
              </span>
              <h3 className="text-xl  mt-4">Software Engineer </h3>
              <time className="mb-1 text-sm leading-none text-gray-400">
                2018-10 / 2021-06
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
                  Back End : RESTful APIs ASP.NET Core with N-Tier architecture
                  ( data , business , presentation )
                </li>
                <li>Deploy docker containers on AWS.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Experience;
