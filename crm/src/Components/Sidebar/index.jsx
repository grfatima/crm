import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="bg-purple-500 w-[25%] h-[100vh] flex flex-col gap-15">
      <div>
        <h1 className="text-center text-3xl font-bold text-white pt-8">
          CRM Paneli
        </h1>
      </div>

      <div>
        <Link
          className="text-lg text-white flex gap-5 pl-10 items-center transition-all duration-300 hover:bg-[#ffffff38] py-5 rounded-lg  "
          to={"/add-user"}
        >
          <FaUserPlus />
          Yeni müştəri əlavə et
        </Link>

        <Link
          className="text-lg text-white flex gap-5 pl-10 items-center transition-all duration-300 hover:bg-[#ffffff38] py-5 rounded-lg  "
          to={"/all-user"}
        >
          <FaUsers />
          Bütün müştərilər
        </Link>

        <Link
          className="text-lg text-white flex gap-5 pl-10 items-center transition-all duration-300 hover:bg-[#ffffff38] py-5 rounded-lg  "
          to={"/archive"}
        >
          <IoArchive />
          Arxiv
        </Link>

        <Link className="text-lg text-white flex gap-5 pl-10 items-center transition-all duration-300 hover:bg-[#ffffff38] py-5 rounded-lg  ">
          <IoIosExit />
          Çıxış et
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
