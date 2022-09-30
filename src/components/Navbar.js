import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-20 sm:flex hidden items-center px-8 top-0 left-0 right-0 z-50">
      <div className="w-full">
        <Link href="/?scroll=landing">
          <p className="font-semibold text-white tracking-wider text-2xl cursor-pointer">
            civtek
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center">
          <Link href="/?scroll=about">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500  hover:bg-primary hover:text-black">
              <p>About</p>
            </div>
          </Link>
          <Link href="/?scroll=missions">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
              <p>Missions</p>
            </div>
          </Link>
          <Link href="/?scroll=team">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
              <p>Our Team</p>
            </div>
          </Link>
          <Link href="/?scroll=divisions">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
              <p>Divisions</p>
            </div>
          </Link>
          <Link href="/?scroll=join">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
              <p>Join Us</p>
            </div>
          </Link>
          <Link href="/?scroll=contact">
            <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
              <p>Contact</p>
            </div>
          </Link>
        </div>
        <div className="flex gap-4 ml-5 ">
          <p className="text-black text-xl border-2 border-primary py-2 px-6 "></p>
          <p className="text-black text-xl border-2 border-primary py-2 px-2 "></p>
        </div>
      </div>
    </div>
  );
};
