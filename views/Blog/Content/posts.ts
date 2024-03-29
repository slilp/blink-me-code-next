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
    id: "000004",
    title: "นั่งเล่า จาก React สู่ Next.js ตอนที่ 1",
    desc: "ใครเคยทำ React มาก่อนแล้วอยากอัพมาลองเล่น Next.js มาลองฟังผมเล่าดูครับ",
    pic: "/blog/nextjs.jpeg",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/นั่งเล่า-จาก-react-สู่-next-js-ตอนที่-1-4633c09681b2",
    tags: [Tag.NEXT, Tag.REACT],
  },
  {
    id: "000005",
    title: "นั่งเล่า จาก React สู่ Next.js ตอนที่ 2",
    desc: "ใครเคยทำ React มาก่อนแล้วอยากอัพมาลองเล่น Next.js มาลองฟังผมเล่าดูครับ",
    pic: "/blog/nextjs.jpeg",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/นั่งเล่า-จาก-react-สู่-next-js-ตอนที่-2-d0c6858031a9",
    tags: [Tag.NEXT, Tag.REACT],
  },
  {
    id: "000006",
    title: "นั่งเล่า จาก React สู่ Next.js ตอนที่ 3",
    desc: "ใครเคยทำ React มาก่อนแล้วอยากอัพมาลองเล่น Next.js มาลองฟังผมเล่าดูครับ",
    pic: "/blog/nextjs.jpeg",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/นั่งเล่า-จาก-react-สู่-next-js-ตอนที่-3-4c6da5378f4f",
    tags: [Tag.NEXT, Tag.REACT],
  },
  {
    id: "000007",
    title: "นั่งเล่า จาก React สู่ Next.js ตอนที่ 4",
    desc: "ใครเคยทำ React มาก่อนแล้วอยากอัพมาลองเล่น Next.js มาลองฟังผมเล่าดูครับ",
    pic: "/blog/nextjs.jpeg",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/นั่งเล่า-จาก-react-สู่-next-js-ตอนที่-4-917f6e35699b",
    tags: [Tag.NEXT, Tag.REACT],
  },
  {
    id: "000031",
    title: "บันทึกการสร้าง REST API ด้วย Gin Framework ตอนที่ 1",
    desc: "อยากเขียน Go เริ่มเลย",
    pic: "/blog/gin-golang.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/บันทึกการสร้าง-rest-api-ด้วย-gin-framework-ตอนที่-1-bd9df020a4b1",
    tags: [Tag.GO],
  },
  {
    id: "000032",
    title: "บันทึกการสร้าง REST API ด้วย Gin Framework ตอนที่ 2",
    desc: "อยากเขียน Go เริ่มเลย",
    pic: "/blog/gin-golang.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/บันทึกการสร้าง-rest-api-ด้วย-gin-framework-ตอนที่-2-2b629530fe6",
    tags: [Tag.GO],
  },
  {
    id: "000010",
    title: "Fetch api แบบมือ Pro กับ useQuery (ตอนที่ 1)",
    desc: "วิธีการ Fetch api ที่ช่วยให้ทั้งชีวิตและโค้ดดีขึ้น",
    pic: "/blog/reactQuery.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/fetch-api-แบบมือ-pro-กับ-usequery-ตอนที่-1-f6e834208326",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000011",
    title: "Fetch api แบบมือ Pro กับ useQuery (ตอนที่ 2)",
    desc: "วิธีการ Fetch api ที่ช่วยให้ทั้งชีวิตและโค้ดดีขึ้น",
    pic: "/blog/reactQuery.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/fetch-api-แบบมือ-pro-กับ-usequery-ตอนที่-2-ae3c39aceac4",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000012",
    title: "Fetch api แบบมือ Pro กับ useQuery (ตอนที่ 3)",
    desc: "วิธีการ Fetch api ที่ช่วยให้ทั้งชีวิตและโค้ดดีขึ้น",
    pic: "/blog/reactQuery.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/fetch-api-แบบมือ-pro-กับ-react-query-ตอนที่-3-95e9ac6cfab",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000013",
    title: "Call api แบบมือ Pro กับ useMutation (ตอนที่ 4)",
    desc: "วิธีการ Call api ที่ช่วยให้ทั้งชีวิตและโค้ดดีขึ้น",
    pic: "/blog/reactQuery.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/call-api-แบบมือ-pro-กับ-usemutation-ตอนที่-4-867d261ee562",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000001",
    title: "React Testing ตอนที่ 1",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-8b8b6ee03ff5",
    tags: [Tag.REACT],
  },
  {
    id: "000002",
    title: "React Testing ตอนที่ 2",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-2-aeba35a5c2e8",
    tags: [Tag.REACT],
  },
  {
    id: "000003",
    title: "React Testing ตอนที่ 3",
    desc: "React Testing with jest and react testing library tool",
    pic: "/blog/jest.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/react-testing-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-3-bd73a7a912c9",
    tags: [Tag.REACT],
  },
  {
    id: "000008",
    title: "Docker ฉบับมือใหม่มากกกก",
    desc: "สำหรับมือใหม่จริงๆนะ เพราะผมก็มือใหม่ พยายามรวบรวมเรื่องที่ทั่วๆไปที่ไม่ว่าจะ Frontend Backend Fullstack ก็ควรรู้ไว้",
    pic: "/blog/docker.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/docker-ฉบับมือใหม่มากกกกก-f3bc43ce8cc",
    tags: [Tag.OTHER],
  },
  {
    id: "000009",
    title: "มาลอง API Mocking แบบเกือบจะเหมือนของจริงกัน",
    desc: "Backend ยังทำ API ไม่เสร็จ อยาก mock API โดยที่ไม่ต้องมาคอยแก้โค้ดใหม่ต้องอ่าน",
    pic: "/blog/msw.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/มาลอง-api-mocking-เเบบเกือบจะเหมือนกับของจริงกัน-b9ca3eec7a87",
    tags: [Tag.REACT, Tag.OTHER],
  },

  {
    id: "000014",
    title: "เบื่อแล้ว Redux อยากลอง Zustand",
    desc: "ใช้ Redux มานานบ้างทีก็อยากห่อะไรใหม่ๆดูบาง",
    pic: "/blog/zustand.jpg",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/เบื่อแล้ว-redux-อยากลอง-zustand-8692f54a59b6",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000015",
    title: "สร้าง UI components library ของตัวเองกัน (ตอนที่ 1)",
    desc: "การสร้่าง UI ใน Storybook อีกหนึ่ง tool ที่ Frontend developer ไม่ควรพลาด",
    pic: "/blog/ui-component.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/สร้าง-ui-components-library-ของตัวเองกัน-ตอนที่-1-ad7d7cb5fc3f",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000016",
    title: "สร้าง UI components library ของตัวเองกัน (ตอนที่ 2)",
    desc: "การสร้่าง UI ใน Storybook อีกหนึ่ง tool ที่ Frontend developer ไม่ควรพลาด",
    pic: "/blog/ui-component.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/สร้าง-ui-components-library-ของตัวเองกัน-ตอนที่-2-จบ-c5518a58d3dd",
    tags: [Tag.REACT, Tag.NEXT],
  },
  {
    id: "000017",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-1-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-4695e6e12421",
    tags: [Tag.NODE],
  },
  {
    id: "000018",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-2-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-6b99cb2c2ce4",
    tags: [Tag.NODE],
  },
  {
    id: "000019",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-3-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-a417337eb3cd",
    tags: [Tag.NODE],
  },
  {
    id: "000020",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-4-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-fb615c9fc0ad",
    tags: [Tag.NODE],
  },
  {
    id: "000021",
    title: "การทำ APIs ด้วย Express (Node.js) ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย Express (Node.js) เชื่อมต่อ database MySql ด้วย sequelize",
    pic: "/blog/nodejs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-%E0%B8%95%E0%B8%AD%E0%B8%99-5-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-express-node-js-mysql-swequelize-2b648f8fecb3",
    tags: [Tag.NODE],
  },
  {
    id: "000022",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 1",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-8eadc4ea245",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000023",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 2",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-2-ac099c5d3562",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000024",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 3",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-3-3ea3643d9be3",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000025",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 4",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-4-993003db84f4",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000026",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 5",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-5-9f44243218f5",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000027",
    title: "สร้าง APIs ด้วย NestJS ตอนที่ 6",
    desc: "(บันทึกฉบับจับมือทำ) การทำ APIs ด้วย NestJS framework เชื่อมต่อ database MySql ด้วย TypeORM",
    pic: "/blog/nestjs.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-restful-apis-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-nestjs-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-6-9702a7cd9127",
    tags: [Tag.NEST, Tag.NODE],
  },
  {
    id: "000028",
    title: "ทำไมต้อง Object Oriented Programming (OOP) ?",
    desc: "เล่าเรื่อง OOP ว่าทำไมเรา framework ในปัจจุบันส่วนใหญ่ถึงนำมาใช้",
    pic: "/blog/programing.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87-object-oriented-programming-oop-dfb9adbb453e",
    tags: [Tag.OTHER],
  },
  {
    id: "000029",
    title: "Unit Testing for Express.js",
    desc: "มาลอง Test API ที่สร้างจาก Express.js กันดู",
    pic: "/blog/programing.png",
    published: "",
    creator: "Slil Puangpoom",
    link: "https://medium.com/@slil.puangpoom/unit-testing-node-js-express-js-3ee0a7373df4",
    tags: [Tag.NODE],
  },
];

export default posts;
