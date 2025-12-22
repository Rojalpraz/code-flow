import {Menu, X} from "lucide-react";
import React from "react";

import {useState} from "react";

function Navbar() {
  const [mobilemenusisopen, setOpen] = useState(false);

  return (
    <nav className="fixed  bg-slate-950/20 backdrop-blur-lg top-0 w-full z-50 transition-all duration-300 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center gap-2 ">
            <a href="#">
              <img src="/logo.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <span className=" text-xl md:text-2xl">
              <span className="text-white">Code</span>
              <span className="text-sky-600">Flow</span>
            </span>
          </div>

          <div className=" hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm md:text-base"
         
            
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm md:text-base"
             
          
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm md:text-base"
          
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            {mobilemenusisopen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobilemenusisopen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 ">
          <div className=" flex py-4 flex-col gap-4  items-center ">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm md:text-base"
              onClick={() => setOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm md:text-base"
              onClick={() => setOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm md:text-base"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
