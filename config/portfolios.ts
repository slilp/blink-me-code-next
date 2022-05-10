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
    title: "WAX game monitor",
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
        desc: "You can customize the token price to see predict your future investment.",
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
    title: "My personal blog",
    desc: "My own static blog with MDX",
    pic: "wax_1.PNG",
    link: "https://blink-game.com",
    tags: [Tag.REACT, Tag.NEXT],
    more: "my-blog",
    type: PortfolioType.FULL,
    theme: "",
    detail: [
      {
        title: "Calculate ROI",
        pic: "wax_1.PNG",
        desc: "สวัสดีครับผม",
      },
      {
        title: "Custom price",
        pic: "wax_1.PNG",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, soluta ullam quos minus necessitatibus dolore laboriosam veniam voluptas suscipit blanditiis ex voluptatum ratione officiis ad nulla obcaecati eos doloremque saepe?",
      },
      {
        title: "Portdolio tracking",
        pic: "wax_1.PNG",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, soluta ullam quos minus necessitatibus dolore laboriosam veniam voluptas suscipit blanditiis ex voluptatum ratione officiis ad nulla obcaecati eos doloremque saepe?",
      },
    ],
  },
];

export default portfolios;
