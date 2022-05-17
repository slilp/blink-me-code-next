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
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-1-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-4695e6e12421",
    tags: [Tag.NODE],
  },
  {
    id: "000002",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-2-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-6b99cb2c2ce4",
    tags: [Tag.NODE],
  },
  {
    id: "000003",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-3-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-a417337eb3cd",
    tags: [Tag.NODE],
  },
  {
    id: "000004",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-4-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-fb615c9fc0ad",
    tags: [Tag.NODE],
  },
  {
    id: "000005",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-5-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-2b648f8fecb3",
    tags: [Tag.NODE],
  },
  {
    id: "000006",
    title: "React Testing ตอนที่ 1",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-8b8b6ee03ff5",
    tags: [Tag.REACT],
  },
  {
    id: "000007",
    title: "React Testing ตอนที่ 2",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-2-aeba35a5c2e8",
    tags: [Tag.REACT],
  },
  {
    id: "000008",
    title: "React Testing ตอนที่ 3",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-3-bd73a7a912c9",
    tags: [Tag.REACT],
  },
  {
    id: "000009",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-8eadc4ea245",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000010",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-2-ac099c5d3562",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000011",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-3-3ea3643d9be3",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000012",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-4-993003db84f4",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000013",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-5-9f44243218f5",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000014",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 6",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-6-9702a7cd9127",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000015",
    title: "ทำไมต้อง Object Oriented Programming (OOP) ?",
    desc: "เล่าเรื่อง OOP ว่าทำไมเรา framework ในปัจจุบันส่วนใหญ่ถึงนำมาใช้",
    pic: "/blog/programing.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87-object-oriented-programming-oop-dfb9adbb453e",
    tags: [Tag.OTHER],
  },
];

export default posts;
