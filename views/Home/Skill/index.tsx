import { FcIdea } from "react-icons/fc";
import Image from "next/image";

function Skill() {
  return (
    <>
      <div className="flex text-2xl gap-3 items-center font-semibold">
        <span>
          <FcIdea></FcIdea>
        </span>
        <span>Skill</span>
      </div>
      <br></br>
      <div className="flex flex-wrap gap-3 justify-center my-10">
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className=" text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            FrontEnd
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/react_logo.png"
                alt="React"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>React</p>
            </div>
            <div>
              <Image
                src="/icon/nextjs_logo.png"
                alt="Next.js"
                width={100}
                height={85}
                layout="fixed"
                className="rounded"
              ></Image>
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Testing
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/jest_logo.png"
                alt="Jest"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Jest</p>
            </div>
          </div>
        </div>
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            CSS framework
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/tailwind_logo.png"
                alt="Tailwind"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Tailwind</p>
            </div>
            <div>
              <Image
                src="/icon/mui_logo.png"
                alt="MaterialUI"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Material-UI</p>
            </div>

            <div>
              <Image
                src="/icon/bootstrap_logo.png"
                alt="Boostrap"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Boostrap</p>
            </div>
          </div>
        </div>
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            BackEnd
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/nodejs_logo.jpeg"
                alt="Node.js"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Node.js</p>
            </div>
            <div>
              <Image
                src="/icon/express_logo.png"
                alt="Express"
                width={135}
                height={85}
                layout="fixed"
                className="rounded"
              ></Image>
              <p>Express.js</p>
            </div>
            <div>
              <Image
                src="/icon/nestjs_logo.svg"
                alt="Nest"
                width={100}
                height={85}
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
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Development tools
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/jira_logo.png"
                alt="Jira"
                width={125}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Jira Software</p>
            </div>
            <div>
              <Image
                src="/icon/postman_logo.png"
                alt="Postman"
                width={225}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Postman</p>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Database
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/sql_logo.jpeg"
                alt="sql"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>SQL server</p>
            </div>
            <div>
              <Image
                src="/icon/mongo_logo.jpeg"
                alt="Mongo"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>MongoDB</p>
            </div>
            <div>
              <Image
                src="/icon/mysql_logo.jpeg"
                alt="MySql"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>MySql</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div className="flex text-2xl gap-3 items-center my-5 font-semibold">
        <span>
          <FcIdea></FcIdea>
        </span>
        <span>Skill I am interesting to learn</span>
      </div>
      <div className="flex flex-wrap gap-3 justify-center my-10">
        <div className="relative border-2 border-blue-600 p-4 h-44 text-center">
          <div
            className="text-white absolute -top-3 mx-0 left-1/2 bg-blue-600 p-2 rounded-lg"
            style={{ transform: "translate(-50%, 0)" }}
          >
            Blockchain
          </div>
          <br></br>
          <div className="flex gap-5">
            <div>
              <Image
                src="/icon/solidity_logo.png"
                alt="solidity"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Solidity</p>
            </div>
            <div>
              <Image
                src="/icon/eter_js.png"
                alt="Eter"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Eter.js</p>
            </div>
            <div>
              <Image
                src="/icon/web3_logo.png"
                alt="Web3"
                width={100}
                height={85}
                layout="fixed"
                className="rounded "
              ></Image>
              <p>Web3.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
