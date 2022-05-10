import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Tag } from "utils/enum";
import menus from "config/menus";
interface MenuProp {
  searchTag: Tag | "All";
  setSelectTag: Dispatch<SetStateAction<Tag | "All">>;
}

function Menu({ searchTag = "All", setSelectTag }: MenuProp) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 my-10 ">
      {menus.map((menu) => (
        <button
          key={menu.id}
          onClick={() => setSelectTag(menu.tag)}
          className={
            searchTag === menu.tag
              ? " transition duration-200 text-white flex items-center justify-center gap-3 bg-blue-600 text-lg rounded-xl p-3"
              : " transition duration-200 flex items-center justify-center gap-3 border-2 border-blue-500 text-lg rounded-xl p-3"
          }
        >
          {menu.label}
        </button>
      ))}
    </div>
  );
}

export default Menu;
