// navbar.jsx
import { useState } from "react";
import {
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span> Step & Stich</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Shoes</a>
                <a href="#">Clothes</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Shoes</a>
              <a href="#">Clothes</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
