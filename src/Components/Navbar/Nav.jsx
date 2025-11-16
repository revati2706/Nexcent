import React, { useState } from "react";
import logo from "../../assests/logo/logo.png";
import Burger from "../../assests/icons/Burger.png";
import Close from "../../assests/icons/Close.png";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="font-[Inter] bg-white w-full h-20 flex items-center justify-center shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between lg:px-52 px-6 w-full items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className=" cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex capitalize items-center gap-8 font-medium text-gray-700">
          <li className="hover:text-[#66BB69] transition">Home</li>
          <li className="hover:text-[#66BB69] transition">Service</li>
          <li className="hover:text-[#66BB69] transition">Feature</li>
          <li className="hover:text-[#66BB69] transition">Product</li>
          <li className="hover:text-[#66BB69] transition">Testimonial</li>
          <li className="hover:text-[#66BB69] transition">FAQ</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-5 font-semibold">
          <button className="text-[#66BB69] hover:underline transition">Login</button>
          <button className="bg-[#66BB69] py-2 px-5 text-white rounded-lg border border-[#66BB69] hover:bg-white hover:text-[#66BB69] transition">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? Close : Burger}
            alt="menu"
            className="w-6 h-6 transition-all duration-300"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col font-semibold gap-8 text-lg items-center capitalize text-gray-800">
          <li className="hover:text-[#66BB69] transition">Home</li>
          <li className="hover:text-[#66BB69] transition">Service</li>
          <li className="hover:text-[#66BB69] transition">Feature</li>
          <li className="hover:text-[#66BB69] transition">Product</li>
          <li className="hover:text-[#66BB69] transition">Testimonial</li>
          <li className="hover:text-[#66BB69] transition">FAQ</li>
        </ul>

        <div className="flex flex-col items-center gap-6 mt-10">
          <button className="text-[#66BB69] hover:underline transition font-semibold">
            Login
          </button>
          <button className="bg-[#66BB69] py-2 px-6 text-white rounded-lg border border-[#66BB69] hover:bg-white hover:text-[#66BB69] transition font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
