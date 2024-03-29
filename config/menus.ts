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
    label: Tag.REACT + " / " + Tag.NEXT,
    pic: "/icon/react_logo.png",
  },
  {
    id: "nodejs",
    tag: Tag.NODE,
    label: Tag.NODE + " / " + Tag.NEST,
    pic: "/icon/nodejs.svg",
  },
  {
    id: "go",
    tag: Tag.GO,
    label: Tag.GO,
    pic: "/icon/golang_logo.png",
  },
  // {
  //   id: "blockchain",
  //   tag: Tag.BLOCK,
  //   label: Tag.BLOCK,
  //   pic: "/icon/btc.png",
  // },
  {
    id: "other",
    tag: Tag.OTHER,
    label: Tag.OTHER,
    pic: "",
  },
];

export default menus;
