import { FC, ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <main
        className="container mx-auto px-4 my-4"
        style={{ minHeight: "74.5vh" }}
      >
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
