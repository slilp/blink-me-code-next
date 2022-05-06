import { Tag } from "utils/enum";

interface MenuList {
  id: string;
  tag: Tag | "All";
  label: string;
  pic: string;
}
const menus: MenuList[] = [
  {
    id: "all",
    tag: "All",
    label: "All",
    pic: "",
  },
  {
    id: "react",
    tag: Tag.REACT,
    label: Tag.REACT,
    pic: "/react_logo.png",
  },
  {
    id: "nextjs",
    tag: Tag.NEXT,
    label: Tag.NEXT,
    pic: "/nextjs_mini_logo.png",
  },
  {
    id: "nestjs",
    tag: Tag.NEST,
    label: Tag.NEST,
    pic: "/nestjs_logo.svg",
  },
  {
    id: "nodejs",
    tag: Tag.NODE,
    label: Tag.NODE,
    pic: "/nodejs.svg",
  },
  {
    id: "go",
    tag: Tag.GO,
    label: Tag.GO,
    pic: "/golang_logo.png",
  },
  {
    id: "blockchain",
    tag: Tag.BLOCK,
    label: Tag.BLOCK,
    pic: "/btc.png",
  },
  {
    id: "other",
    tag: Tag.OTHER,
    label: Tag.OTHER,
    pic: "",
  },
];

export default menus;
