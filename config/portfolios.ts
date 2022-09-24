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
    link: "https://vote-me-up.netlify.app",
    git: "https://github.com/slilp/voting-app",
    tags: [Tag.BLOCK, Tag.REACT],
    more: "voting-app",
    type: PortfolioType.FULL,
    theme: "",
    detail: [
      {
        title: "Create new voting",
        pic: "voting-2.png",
        desc: "Create new voting on smartcontract",
      },
      {
        title: "Share voting you create",
        pic: "voting-3.png",
        desc: "Start your voting and share to voters you want.",
      },
      {
        title: "View result of voting",
        pic: "voting-4.png",
        desc: "See voting result.",
      },
    ],
  },
  {
    id: "000001",
    title: "WAX Game Monitor",
    desc: "Gaming monitor and calculator for Wax GameFi",
    pic: "wax-game-1.PNG",
    link: "https://blink-game.com",
    git: "https://github.com/slilp/wax-game-monitor",
    tags: [Tag.REACT, Tag.NEXT],
    more: "wax-game",
    type: PortfolioType.FULL,
    theme: "",
    detail: [
      {
        title: "ROI Calculator",
        pic: "wax-game-2.PNG",
        desc: "Calculate ROI base on crafting or secondary market price (atomichub)",
      },
      {
        title: "Custom price calculation",
        pic: "wax-game-3.PNG",
        desc: "You can customize the token price to predict your future investment.",
      },
      {
        title: "Portfolio tracking",
        pic: "wax-game-4.PNG",
        desc: "See all token in your wallet and tracking in game assets",
      },
    ],
  },
  {
    id: "000002",
    title: "My Personal Blog",
    desc: "My own blog",
    pic: "blog-1.PNG",
    link: "http://localhost:3000/blog",
    git: "https://github.com/slilp/blink-me-code-next",
    tags: [Tag.REACT, Tag.NEXT],
    more: "my-blog",
    type: PortfolioType.FULL,
    theme: "",
    detail: [
      {
        title: "Dark mode",
        pic: "blog-2.PNG",
        desc: "Dark mode style support",
      },
      {
        title: "Searching",
        pic: "blog-3.PNG",
        desc: "Search by blog content type",
      },
      {
        title: "Post content",
        pic: "blog-1.PNG",
        desc: "In process to migrate to MDX",
      },
    ],
  },
  {
    id: "000003",
    title: "My App Starter Pack",
    desc: "Starter app project examples for ready to implement.",
    pic: "starter-1.PNG",
    link: "https://github.com/slilp/blink-starter-pack",
    git: "",
    tags: [Tag.NODE, Tag.NEST, Tag.GO, Tag.REACT],
    more: "starter-app",
    type: PortfolioType.MINI,
    theme: "",
    detail: [
      {
        title: "Express + Sequelize",
        pic: "starter-2.png",
        desc: "Example Rest APIs from express framework app with sequelize ORM and Mysql database",
      },
      {
        title: "Express + Mongoose",
        pic: "starter-3.png",
        desc: "Example Rest APIs from express framework app with mongoose ODM and MongoDB database",
      },
      {
        title: "NestJS + TypeORM",
        pic: "starter-4.png",
        desc: "Example Rest APIs from NestJS framework app with TypeORM and Mysql database",
      },
      {
        title: "Gin + Gorm",
        pic: "starter-5.png",
        desc: "In Development",
      },
      {
        title: "React",
        pic: "starter-6.png",
        desc: "In Development",
      },
    ],
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
];

export default portfolios;
