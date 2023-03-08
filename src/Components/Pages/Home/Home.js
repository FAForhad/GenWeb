import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import t1 from "../../../t1.png";
import t2 from "../../../t2.png";
import "./Home.css";

const Home = () => {
  const { template, setTemplate } = useState(false);
  console.log(template);
  const handleImageClick = () => {
    setTemplate(!template);
  };
  return (
    <div>
      <section className="bgc">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-20 items-end  lg:col-span-5 lg:h-full xl:col-span-6 bgc_box">
            <div className="hidden lg:relative lg:block lg:p-12">
              <a
                className="block text-white border-spacing-5 border w-52 h-14 border-orange-500"
                href="/"
              >
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-500 uppercase">
                  <span className="text-4xl text-orange-500"> G</span>enWeb
                </span>
              </a>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full  text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                </a>

                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  <span className="text-4xl text-orange-500"> G</span>enWeb
                </span>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum
                  aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <form onSubmit="{handleCreateUser}" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    for="name"
                    class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                  >
                    <input
                      type="name"
                      id="name"
                      placeholder="Name"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                    />

                    <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                      Name
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <label
                    for="introduction"
                    class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                  >
                    <textarea
                      type="introduction"
                      id="introduction"
                      placeholder="Introduction"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                    />

                    <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                      Introduction
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <label
                    for="Image URL"
                    class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                  >
                    <input
                      type="url"
                      id="name"
                      placeholder="Image URL"
                      class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                    />

                    <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                      Image URL
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <div className="flex gap-7">
                    <label
                      for="email"
                      class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                    >
                      <input
                        type="email"
                        id="email"
                        placeholder="email"
                        class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                      />

                      <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                    <label
                      for="github"
                      class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                    >
                      <input
                        type="github"
                        id="github"
                        placeholder="github"
                        class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                      />

                      <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                        Github
                      </span>
                    </label>
                    <label
                      for="twitter"
                      class="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                    >
                      <input
                        type="twitter"
                        id="twitter"
                        placeholder="twitter"
                        class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-white"
                      />

                      <span class="absolute left-0 top-2 -translate-y-1/2 text-lg text-orange-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-xs">
                        Twitter
                      </span>
                    </label>
                  </div>
                </div>

                <div className="col-span-6">
                  <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                      <img onClick={handleImageClick} src={t1} className="w-full" alt="kitchen" />
                      <img
                        onClick={() => handleImageClick}
                        src={t2}
                        className="w-full"
                        alt="sitting room"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to={template || true ? "/template1" : "/template2"}
                    class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="/download"
                  >
                    <span class="rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent flex items-center gap-2">
                      GO<BsArrowReturnRight></BsArrowReturnRight>
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Home;
