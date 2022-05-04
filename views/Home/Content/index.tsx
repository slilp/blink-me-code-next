import Link from "next/link";
import { FcOk } from "react-icons/fc";
import { BsCaretRightFill, BsStar, BsPinFill } from "react-icons/bs";

function Content() {
  return (
    <div className="my-10 border-5 ">
      <div className="flex text-2xl gap-3 items-center font-semibold">
        <span>
          <FcOk></FcOk>
        </span>
        <span>My Blog / Portfolio</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-9">
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-xl p-5">
          <p
            className="text-6xl absolute text-green-500 dark:text-white"
            style={{
              top: "-15px",
              right: "-7.5px",
              transform: "rotate(20deg)",
            }}
          >
            <BsPinFill></BsPinFill>
          </p>
          <br></br>
          <p className="text-3xl font-semibold">
            Blogs <p className="font-thin">Knowledge reminding</p>
            <p className="font-thin">what I have learned.</p>
          </p>
          <Link href="/blog" passHref>
            <button className="text-white flex items-center justify-center gap-2 text-md bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-44">
              See more
              <BsCaretRightFill> </BsCaretRightFill>
            </button>
          </Link>
        </div>
        <div className="relative flex flex-col justify-between h-80 dark:bg-gray-600 bg-gray-100 rounded-xl p-5">
          <p
            className="text-6xl absolute text-yellow-400 dark:text-white"
            style={{
              top: "-15px",
              right: "-7.5px",
              transform: "rotate(20deg)",
            }}
          >
            <BsStar></BsStar>
          </p>
          <br></br>
          <p className="text-3xl font-semibold">
            Portfolio <p className="font-thin">My personal projects</p>
          </p>
          <Link href="/portfolio" passHref>
            <button className="text-white text-md flex items-center justify-center gap-2 bg-blue-600 rounded-full p-4 hover:opacity-90 hover:transition w-44">
              See more
              <BsCaretRightFill> </BsCaretRightFill>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
