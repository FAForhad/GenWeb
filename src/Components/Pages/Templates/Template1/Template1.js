import React from "react";
import "./Template1.css";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Template1 = () => {
  return (
    <div>
      <div class="lg:px-16 lg:py-16 px-4 pt-12 bgt1">
        <div class="p-8 box_bgt1 shadow lg:mt-24 mt-4">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="relative">
              <div class="w-56 h-56 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img
                  className="h-52 w-52 rounded-full"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  alt=""
                  src="https://bestprofilepictures.com/wp-content/uploads/2021/06/Hacker-Profile-Picture-For-Tiktok.jpg"
                />
              </div>
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"></div>
          </div>
          <div class="lg:mt-20 mt-5 text-center border-b lg:pb-12 pb-4">
            <h1 class="lg:text-5xl text-3xl  font-extrabold text-fuchsia-300">Jessica Jones</h1>
            <p class="lg:mt-8 mt-2 text-gray-100">Solution Manager - Creative Tim Officer</p>
            <div class=" flex justify-center items-center gap-3 text-center order-last md:order-first lg:mt-14 md:mt-0">
              <a href="" className="text-fuchsia-400">
                <FaTwitter className="w-12 h-12"></FaTwitter>
              </a>
              <a href="" className="mx-5 text-fuchsia-400">
                <FaGithub className="w-12 h-12"></FaGithub>
              </a>
              <a href="" className="text-fuchsia-400">
                <HiOutlineMail className="w-12 h-12"></HiOutlineMail>
              </a>
            </div>
          </div>
          <div class="lg:mt-12 flex flex-col justify-center">
            <p class="text-gray-100 text-center font-light lg:px-16 lg:py-10 py-4">
              An artist of considerable range, Ryan — the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy — writes, <br /> performs and records all of his own music,
              giving it a warm,
              <br /> intimate feel with a solid groove structure. <br />
              An artist of considerable range.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
