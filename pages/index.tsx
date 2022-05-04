import type { NextPage } from "next";
import { Header, Content, Experience, Skill } from "../views/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Experience />
      <Content />
      <Skill />
    </div>
  );
};

export default Home;
