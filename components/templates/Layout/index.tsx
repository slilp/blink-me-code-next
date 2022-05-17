import { FC, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  const [mouted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme === "system") setTheme("dark");
  }, []);
  if (!mouted) return null;

  return (
    <>
      <Head>
        <title>Blink Me Code</title>
        <meta property="og:image" content="meta.png" />
      </Head>
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
