import { Tag, PortfolioType } from "utils/enum";

export interface PortfolioList {
  id: string;
  title: string;
  desc: string;
  pic: string;
  git: string;
  more: string;
  link: string;
  tags: Tag[];
  type: PortfolioType;
  theme: string;
  detail: PortfolioDetail[];
}

export interface PortfolioDetail {
  id: string;
  title: string;
  pic: string;
  desc: string;
}

const portfolios: PortfolioList[] = [
  {
    id: "000005",
    title: "Blockchain Voting App",
    desc: "VOTE ME UP is a decentralized voting platform with smartcontract on polygon network.",
    pic: "voting-1.png",
    link: "https://github.com/slilp/voting-app",
    git: "https://github.com/slilp/voting-app",
    tags: [Tag.BLOCK, Tag.REACT],
    more: "voting-app",
    type: PortfolioType.MINI,
    theme: "",
    detail: [],
  },
  {
    id: "000004",
    title: "Ecommerce Platform",
    desc: "Frontend + Backend for example ecommerce platform",
    pic: "ecom-1.png",
    link: "https://github.com/slilp/ecommerce-platform",
    git: "",
    tags: [Tag.NODE, Tag.REACT],
    more: "",
    type: PortfolioType.MINI,
    theme: "",
    detail: [],
  },
  {
    id: "000001",
    title: "WAX Blockchain Game Monitor",
    desc: "Gaming monitor and calculator for Wax GameFi",
    pic: "wax-game-1.PNG",
    link: "https://github.com/slilp/wax-game-monitor",
    git: "https://github.com/slilp/wax-game-monitor",
    tags: [Tag.REACT, Tag.NEXT],
    more: "wax-game",
    type: PortfolioType.MINI,
    theme: "",
    detail: [],
  },
  {
    id: "000002",
    title: "Ready to go Dashboard!",
    desc: "Everything you need for start a dashboard project.",
    pic: "dashboard-1.png",
    link: "https://blink-dashboard-stack.vercel.app/login",
    git: "",
    tags: [Tag.NEXT, Tag.MUI, Tag.NEXT_AUTH, Tag.REACT_QUERY, Tag.I18],
    more: "my-blog",
    type: PortfolioType.FULL,
    theme: "",
    detail: [
      {
        id: "dashobard-feature-1",
        title: "🔑 Role-based access control",
        desc: "Restrict feature access depend on role of user login",
        pic: "/portfolio/dashboard-2.png",
      },
      {
        id: "dashobard-feature-2",
        title: "🌃 Dark mode",
        desc: "Easier for your vision by changing the screen to dark",
        pic: "/portfolio/dashboard-3.png",
      },
      {
        id: "dashobard-feature-3",
        title: "🔤 Multi language support",
        desc: "Translation the content into multiple languages that help to attracts international user.",
        pic: "/portfolio/dashboard-4.png",
      },
    ],
  },
  {
    id: "000003",
    title: "My App Starter Pack",
    desc: "Starter app project examples for ready to implement.",
    pic: "starter-1.PNG",
    link: "https://github.com/slilp/blink-starter-pack",
    git: "https://github.com/slilp/blink-starter-pack",
    tags: [Tag.NODE, Tag.NEST, Tag.GO, Tag.REACT],
    more: "starter-app",
    type: PortfolioType.MINI,
    theme: "",
    detail: [],
  },
];

export default portfolios;
