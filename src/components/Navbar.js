export const Navbar = () => {
  return (
    <div className="w-full h-20 sm:flex hidden items-center px-8 top-0 left-0 right-0 z-50">
      <div className="w-full">
        <p className="font-semibold text-white tracking-wider text-2xl ">
          civtek
        </p>
      </div>
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center">
          <div
            onClick={() => {
              const anchor = document.querySelector("#about");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500  hover:bg-primary hover:text-black"
          >
            <p>about</p>
          </div>
          <div
            onClick={() => {
              const anchor = document.querySelector("#missions");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black"
          >
            <p>missions</p>
          </div>
          <div
            onClick={() => {
              const anchor = document.querySelector("#team");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black"
          >
            <p>team</p>
          </div>
          <div
            onClick={() => {
              const anchor = document.querySelector("#join");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black"
          >
            <p>join us</p>
          </div>
          <div
            onClick={() => {
              const anchor = document.querySelector("#contact");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black"
          >
            <p>contact</p>
          </div>
        </div>
        <div className="flex gap-4 ml-5 ">
          <p className="text-black text-xl border-2 border-primary py-2 px-6 "></p>
          <p className="text-black text-xl border-2 border-primary py-2 px-2 "></p>
        </div>
      </div>
    </div>
  );
};
