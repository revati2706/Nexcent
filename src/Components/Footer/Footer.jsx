import React, { useState } from "react";
import logo_2 from "../../assests/logo/logo_2.png";
import insta from "../../assests/logo/insta.png";
import web from "../../assests/logo/web.png";
import twitter from "../../assests/logo/twitter.png";
import yt from "../../assests/logo/yt.png";

const Footer = () => {
  const [ip, setip ] = useState("")
  return (
    <footer className="bg-[#273238] w-full py-10 text-white">
      <div className="max-w-6xl mx-auto px-5 flex flex-col gap-10 px-10">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left side */}
          <div className="flex flex-col gap-5 md:w-1/3">
            <img className="w-32" src={logo_2} alt="logo" />
            <p className="text-sm">
              Copyright © 2020 Nexcent Ltd. All rights reserved
            </p>

            <div className="flex gap-4 items-center">
              <img className="w-6 cursor-pointer" src={insta} />
              <img className="w-6 cursor-pointer" src={web} />
              <img className="w-6 cursor-pointer" src={twitter} />
              <img className="w-6 cursor-pointer" src={yt} />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row md:flex-row gap-10 md:w-2/3 justify-between">

            <div className="flex flex-col">
              <h1 className="font-bold capitalize">Company</h1>
              <ul className="text-sm mt-3 flex flex-col gap-3">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold capitalize">Support</h1>
              <ul className="text-sm mt-3 flex flex-col gap-3">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="capitalize font-bold">Stay up to date</h1>
              <form onSubmit={(e)=>{e.preventDefault();setip("") }} className="bg-gray-600 flex rounded-md overflow-hidden">
                <input
                  className="p-2 bg-transparent outline-none flex-1"
                  type="email"
                  value={ip}
                  onChange={(e)=>setip(e.target.value)}
                  placeholder="Your email"
                />
                <button className="px-4 bg-green-500 font-semibold">
                  Send
                </button>
            
              </form>
            
            
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


