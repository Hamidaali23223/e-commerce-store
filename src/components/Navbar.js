import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md shadow-gray-400 h-20 justify-center">
      <div className="flex justify-between">
        {/* logo */}
        <div className="logo flex">
          <img
            class="w-28 p-1 h-20"
            src="/image\4b6c719135bdd5ce80597c96336a840c-removebg-preview.png"
            alt="Image 1"
          />
          <label className="mt-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 text-xl">
            EMPIRES
          </label>
        </div>

        <ul className="nav font-bold mt-6 h-12 justify-center text-center flex w-80 gap-6">
          <li className="home">Home</li>
          <li className="about">about</li>
          <li className="contect">contect us</li>
        </ul>

        <div className="pt-6 h-12 justify-center">
          <input
            type="search"
            className="border-black w-80 px-3 font-light h-9 rounded-lg bg-slate-200"
            placeholder="Search in Empires"
          />
        </div>

        <ul className="flex font-bold mt-6 justify-end gap-5">
          <li className="cart">
            <div class=" bg-white flex ">
              <div class="relative">
                <div class="absolute left-3">
                  <p class="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    3
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8"
                >
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
            </div>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <div className="w-12 h-12 rounded-full">
              <img
                className="w-12 h-12 p-1 rounded-full"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt="img"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
