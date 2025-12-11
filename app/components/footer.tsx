"use client";
import {} from "react-icons";

export default function Footer() {
  return (
    <div className="bg-[##000208] md:flex items-center justify-center p-10 ">
      {/* comapny  */}
      <div className=" text-center ">
        <a href="/" className="">
          TechSpire
        </a>
      </div>

      {/* social icon  */}
      <div className="flex  items-center justify-center gap-4 ">
        <a href="/facebook">Facebook</a>
        <a href="/linkedIn">LinkedIn</a>
        <a href="/instagram">Instagram</a>
        <a href="/website">Website</a>
      </div>
      {/* copyright  */}
      <div className="text-center">
        All right reserverd by TechSpire &copy; 2025
      </div>
    </div>
  );
}
