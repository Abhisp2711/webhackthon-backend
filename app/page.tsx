export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center font-sans bg-[ #ff1e00]">
      {/* container */}
      <div className="p-10">
        {/* hero  */}
        <div className="flex gap-5 flex-wrap-reverse">
          <div>
            <h1 className="text-3xl text-white  ">TehcSpire Club</h1>
            <div className="w-full h-0.5 bg-white mb-4"></div>
            <p className=" text-xl text-white">
              Teachsphire is for the freshers who really want to do something
              innovative. By participating in this event you are going to an
              amazing experience , we are creating an amazing environment where
              an innovative minds work together and build something
              unimaginable for future
            </p>
          </div>
          <div className="">
            <img src="./hero_image.jpeg" alt="" />
          </div>
        </div>
        <div>
          <div>
            <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md w-full text-center ">
              <a href="/login">Apply now</a>
            </button>
            <div className=" flex items-center justify-center">
              <input className="bg-white p-2 rounded-md mr-3" type="email" />
              <button className=" px-3 py-2 my-4 bg-[#3259E8] rounded-md text-center ">
                <a href="/login">Subscribe</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
