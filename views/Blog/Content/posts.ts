import { Tag } from "utils/enum";

export interface PostDetail {
  id: string;
  title: string;
  desc: string;
  pic: string;
  published: string;
  creator: string;
  link: string;
  tags: Tag[];
}

const BLOG_URL = "/blog/";

const posts: PostDetail[] = [
  {
    id: "000001",
    title: "React Testing ตอนที่ 1",
    desc: "React Testing with jest and react testing library tool",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}react-testing-1`,
    tags: [Tag.REACT],
  },
  {
    id: "000002",
    title: "React Testing ตอนที่ 2",
    desc: "React Testing with jest and react testing library tool",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}react-testing-2`,
    tags: [Tag.REACT],
  },
  {
    id: "000003",
    title: "React Testing ตอนที่ 3",
    desc: "React Testing with jest and react testing library tool",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}react-testing-3`,
    tags: [Tag.REACT],
  },
  {
    id: "000004",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}express-api-1`,
    tags: [Tag.NODE],
  },
  {
    id: "000005",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}express-api-2`,
    tags: [Tag.NODE],
  },
  {
    id: "000006",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}express-api-3`,
    tags: [Tag.NODE],
  },
  {
    id: "000007",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}express-api-4`,
    tags: [Tag.NODE],
  },
  {
    id: "000008",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}express-api-5`,
    tags: [Tag.NODE],
  },
  {
    id: "000009",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-1`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000010",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-2`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000011",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-3`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000012",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-4`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000013",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-5`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000014",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 6",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}nest-api-6`,
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000015",
    title: "ทำไมต้อง Object Oriented Programming (OOP) ?",
    desc: "เล่าเรื่อง OOP ว่าทำไมเรา framework ในปัจจุบันส่วนใหญ่ถึงนำมาใช้",
    pic: "/bore.png",
    published: "",
    creator: "Slil.P",
    link: `${BLOG_URL}why-oop`,
    tags: [Tag.OTHER],
  },
];

export default posts;
