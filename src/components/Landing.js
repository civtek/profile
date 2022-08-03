export const Landing = () => {
  return (
    <div className="bg-dark w-full h-screen px-20 pt-56 pb-40 text-white flex flex-col items-center justify-center">
      <div className="text-9xl font-semibold mb-5 z-20">civtek</div>
      <div className="text-6xl font-medium text-primary mb-20 z-20">
        building the future of tech.
      </div>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-primary hover:text-white  ">
        <span className="relative px-5 py-2.5 transition-all delay-100 ease-in-out duration-500 bg-dark text-white text-2xl font-medium  group-hover:bg-opacity-0 group-hover:text-black">
          Start your journey
        </span>
      </button>
    </div>
  );
};
