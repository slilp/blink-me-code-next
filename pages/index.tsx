import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [mouted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mouted) return null;

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};

export default Home;
