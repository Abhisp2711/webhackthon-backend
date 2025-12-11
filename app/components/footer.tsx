"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#000208] md:flex md:gap-2 items-center justify-center p-10 text-white ">
      {/* divider */}
      <div className="w-full h-px bg-gray-600 "></div>
      {/* comapny  */}

      <div className=" text-center mb-5 mt-4 ">
        <a href="/" className="text-xl cursor-pointer hover:text-gray-200">
          TechSpire Club
        </a>
      </div>

      {/* social icon  */}
      <div className="flex mb-4  items-center justify-center gap-4 ">
        <a href="/facebook">
          <FaFacebook color="#3259E8" size={28} />
        </a>

        <a href="/linkedIn">
          <FaLinkedin color="#0077B5" size={28} />
        </a>
        <a href="/instagram">
          <FaInstagram color="#E84D67" size={28} />
        </a>
        <a href="/website">
          <FaGlobe color="#3259E8" size={28} />
        </a>
      </div>
      {/* copyright  */}
      <div className="text-center">
        All right reserverd by TechSpire &copy; 2025
      </div>
    </div>
  );
}
