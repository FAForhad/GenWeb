import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  return (
    <div className="bg">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl lg:my-40 md:my-40 my-24 box transition decoration-slate-900">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0 px-5 py-10 lg:py-24">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-pink-500 sm:text-5xl md:mx-auto">
                Find The right Profile For You
              </h2>
              <p className="text-base text-yellow-200 md:text-lg">
                The Better FREE Way To Build Funnels of Your Profile
              </p>
            </div>
            <div>
              <Link
                to="/home"
                class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download"
              >
                <span class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Get Start
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
