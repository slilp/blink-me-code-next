import { Tag, PortfolioType } from "utils/enum";

export interface PortfolioList {
  id: string;
  title: string;
  desc: string;
  pic: string;
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
    id: "000001",
    title: "WAX Game Monitor",
    desc: "Gaming monitor and calculator for Wax GameFi",
    pic: "wax-game-1.PNG",
    link: "https://blink-game.com",
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
    desc: "My own static blog with MDX",
    pic: "blog-1.PNG",
    link: "http://localhost:3000/blog",
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
        pic: "blog-4.PNG",
        desc: "Post content from MDX file",
      },
    ],
  },
  {
    id: "000003",
    title: "My App Starter Pack",
    desc: "Starter app project examples for ready to implement.",
    pic: "starter-1.PNG",
    link: "https://github.com/slilp/blink-starter-pack",
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
];

export default portfolios;
