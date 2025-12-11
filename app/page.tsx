import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[ #ff1e00]">
      <div className="flex-col md:flex mt-40">
        <div className="flex-col md:flex items-center justify-center">
          <h1 className="text-xl pt-4 m-2">
            TechSpire is for the fresher who are really want to do something....
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            repellendus eius nesciunt, nam amet necessitatibus perspiciatis nemo
            cum dolorem recusandae ipsa, omnis adipisci itaque qui nulla
            asperiores quod. Quasi.
          </h1>
          <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md w-full text-center ">
            <a href="/login">Join Now ...</a>
          </button>
        </div>
        <div>
          <img
            src="./hero_image.jpeg"
            alt="hero_image"
            className="h-100 w-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
