import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Template2.css";

const Template2 = () => {
  return (
    <div className="bgc2">
      <div class=" flex flex-wrap items-center justify-center ">
        <div class="bgc_box2 rounded-lg container max-w-lg  shadow-lg transform duration-200 easy-in-out m-12">
          <div class="h-2/4 sm:h-64 overflow-hidden rounded-lg bgCover2"></div>
          <div class="flex justify-start px-5 -mt-12 mb-5">
            <span clspanss="block relative h-32 w-32">
              <img
                alt="Photo by aldi sigun on Unsplash"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
              />
            </span>
          </div>
          <div class="">
            <div class="px-7 mb-8">
              <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">Beth J. Greene</h2>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae vitae
                odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.
              </p>
              <div class="justify-center px-4 py-2 cursor-pointer max-w-min mx-auto mt-8 rounded-lg text-gray-300 border-stone-900 border dark:text-gray-300  dark:hover:text-gray-200">
                eethgreene@gmail.com
              </div>
              <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                <a href="" className="text-gray-400">
                  <FaTwitter className="w-12 h-12"></FaTwitter>
                </a>
                <a href="" className="mx-5 text-gray-400">
                  <FaGithub className="w-12 h-12"></FaGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
