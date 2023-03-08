import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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

              <form onSubmit="{handleloginUser}" className="mt-8 grid grid-cols-6 gap-6">
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
                  <label for="MarketingAccept" className="flex gap-4">
                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and company
                      announcements.
                    </span>
                  </label>
                </div>
              </form>
              <button>
                <div onClick={"handleGoogleLogin"}>
                  <span className="text-black flex items-center gap-2 p-1">
                    {" "}
                    SignIn With Google{" "}
                  </span>
                </div>
              </button>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Home;
