import Fade from "react-reveal/Fade";

export const WhatWeDo = () => {
  return (
    <div className="bg-dark w-full h-full px-20 py-40 text-white flex flex-col items-center">
      <div className="w-full h-full bg-cover bg-center">
        <div className="grid grid-cols-3 w-full h-full">
          <Fade left cascade>
            <div className="text-8xl text-white font-semibold ml-10 flex flex-col justify-center">
              <div>What</div>
              <div className="text-primary">We</div>
              <div>Do</div>
            </div>
          </Fade>

          <div className="grid grid-rows-2 w-full h-full z-20">
            <div
              className="
              border-2 border-primary 
              flex flex-col
              cursor-pointer
              group
              hover:bg-primary
              transition
              duration-500
              ease-in-out
            "
            >
              <div
                className="
                text-4xl
                font-semibold
                text-white
                px-10
                py-20
                flex flex-col
                justify-center
                group-hover:text-black
              "
              >
                <p className="">Projects</p>
                <p className="text-2xl font-normal pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
            <div
              className="
              border-2 border-t-0 border-primary 
              flex flex-col
              cursor-pointer
              group
              hover:bg-primary
              transition
              duration-500
              ease-in-out
            "
            >
              <div
                className="
                text-4xl
                font-semibold
                text-white
                px-10
                py-20
                flex flex-col
                justify-center
                group-hover:text-black
              "
              >
                <p className="">Networking</p>
                <p className="text-2xl font-normal pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 w-full h-full z-20">
            <div
              className="
              border-2 border-l-0 border-primary 
              flex flex-col
              cursor-pointer
              group
              hover:bg-primary
              transition
              duration-500
              ease-in-out
            "
            >
              <div
                className="
                text-4xl
                font-semibold
                text-white
                px-10
                py-20
                flex flex-col
                justify-center
                group-hover:text-black
              "
              >
                <p className="">Trainings</p>
                <p className="text-2xl font-normal pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
            <div
              className="
              border-2 border-t-0 border-l-0 border-primary 
              flex flex-col
              cursor-pointer
              group
              hover:bg-primary
              transition
              duration-500
              ease-in-out
            "
            >
              <div
                className="
                text-4xl
                font-semibold
                text-white
                px-10
                py-20
                flex flex-col
                justify-center
                group-hover:text-black
              "
              >
                <p className="">Events</p>
                <p className="text-2xl font-normal pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
