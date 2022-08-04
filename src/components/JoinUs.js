export const JoinUs = () => {
  return (
    <div className="w-full h-screen relative bg-dark text-white flex items-center justify-center">
      <div className="absolute w-full h-72 bg-primary top-0 z-0 flex flex-col items-center justify-center">
        <div className="font-semibold text-7xl text-center py-3">Join Our Journey</div>
        <div className="text-2xl text-center w-3/5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </div>
      </div>
      {/* <div className="absolute w-full h-32 bg-gradient-to-b from-white to-transparent top-0 opacity-20"></div> */}
      <div className="w-full h-full flex flex-wrap gap-16 items-center justify-center mt-48 z-10">
        <div className="w-80 h-[28rem] flex flex-col justify-between bg-dark border border-white p-8 ">
          <div className="font-semibold text-3xl text-white ">
            <div>
              Join Our <p className="text-primary">Team</p>
            </div>
            <div className="flex flex-row gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-6 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="w-32 flex items-center justify-center px-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
            More
          </div>
        </div>
        <div className="w-80 h-[28rem] flex flex-col justify-between bg-dark border border-white p-8 ">
          <div className="font-semibold text-3xl text-white ">
            <div>
              Become Our <p className="text-primary">Member</p>
            </div>
            <div className="flex flex-row gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-6 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="w-32 flex items-center justify-center px-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
            More
          </div>
        </div>
        <div className="w-80 h-[28rem] flex flex-col justify-between bg-dark border border-white p-8 ">
          <div className="font-semibold text-3xl text-white ">
            <div>
              <p className="text-primary">Partner</p> With Us
            </div>
            <div className="flex flex-row gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-6 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className="w-32 flex items-center justify-center px-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
            More
          </div>
        </div>
      </div>
    </div>
  );
};
