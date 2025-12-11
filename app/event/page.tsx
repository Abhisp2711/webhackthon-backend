"use client";

export default function event() {
  return (
    <div className="text-white">
      {/* head line */}
      <div>
        <h2 className="text-3xl pt-4 text-center">
          Event discovery & Management
        </h2>
        <div className="w-full h-0.5 mt-2 bg-[#3259E8]"></div>
      </div>
      {/* card section*/}
      <div className="flex p-4 gap-2 flex-wrap items-center justify-center">
        {/* card */}
        <div className=" bg-[#1f1844] p-4 rounded-md ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h2 className="text-center pb-2 text-xl">Code Arena</h2>
            </div>
            <img src="./event1.jpeg" alt="" className="rounded-md" />
            <p className="text-center  text-md font-bold pt-2">
              Title : This is for coding..
            </p>
            <p className="text-center  text-md font-bold pt-2">
              Venue : Language Lab
              <br />
              Registration date :15-January-2026
            </p>
            <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md w-full text-center ">
              <a href="/login">Apply now</a>
            </button>
          </div>
        </div>
        <div className=" bg-[#1f1844] p-4 rounded-md ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h2 className="text-center pb-2 text-xl">Code Arena</h2>
            </div>
            <img src="./event1.jpeg" alt="" className="rounded-md" />
            <p className="text-center  text-md font-bold pt-2">
              Title : This is for coding..
            </p>
            <p className="text-center  text-md font-bold pt-2">
              Venue : Language Lab
              <br />
              Registration date :15-January-2026
            </p>
            <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md w-full text-center ">
              <a href="/login">Apply now</a>
            </button>
          </div>
        </div>
        <div className=" bg-[#1f1844] p-4 rounded-md ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h2 className="text-center pb-2 text-xl">Code Arena</h2>
            </div>
            <img src="./event1.jpeg" alt="" className="rounded-md" />
            <p className="text-center  text-md font-bold pt-2">
              Title : This is for coding..
            </p>
            <p className="text-center  text-md font-bold pt-2">
              Venue : Language Lab
              <br />
              Registration date :15-January-2026
            </p>
            <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md w-full text-center ">
              <a href="/login">Apply now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
