export const Navbar = () => {
  return (
    <div className="w-full h-20 bg-dark flex items-center px-8 fixed top-0 left-0 right-0 z-50">
      <div className="w-full">
        <p className="font-semibold text-white tracking-wider text-2xl">
          civtek
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500  hover:bg-primary hover:text-black">
            <p>about</p>
          </div>
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
            <p>vision</p>
          </div>
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
            <p>projects</p>
          </div>
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
            <p>team</p>
          </div>
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
            <p>join</p>
          </div>
          <div className="flex items-center cursor-pointer text-white tracking-wider text-xl h-20 px-6 text-center transition delay-100 ease-in-out duration-500 hover:bg-primary hover:text-black">
            <p>partner</p>
          </div>
        </div>
        <div className="flex gap-4 ml-5">
          <p className="text-black text-xl bg-primary py-2 px-6 rounded-lg"></p>
          <p className="text-black text-xl bg-primary py-2 px-2 rounded-lg"></p>
        </div>
      </div>
    </div>
  );
};