import { Fade } from "./animations/Fade";

export const WhatWeDo = () => {
  return (
    <div className="bg-dark w-full h-full px-20 py-40 text-white flex flex-col items-center">
      <div className="w-full h-full bg-cover bg-center">
        <div className="grid grid-cols-3 w-full h-full">
          <div className="text-8xl font-semibold flex flex-col justify-center z-20">
            <Fade child="Our"></Fade>
            <Fade child="Missions" classes="text-primary" delay={0.5}></Fade>
          </div>

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
                <p className="">Community</p>
                <p className="text-2xl font-normal pt-5">
                  Build a solid and active tech community and culture among
                  students in Hong Kong
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
                <p className="">Empower</p>
                <p className="text-2xl font-normal pt-5">
                  Empower students with technical and soft skills as well as
                  access needed for professional achievements in the tech
                  industry
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
                <p className="">Impact</p>
                <p className="text-2xl font-normal pt-5">
                  Build impactful products which people need and love with the
                  sole purpose of working for good
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
                <p className="">Experience</p>
                <p className="text-2xl font-normal pt-5">
                  Create a supportive team and learning environment for students
                  to get hands-on tech experience and encourage their personal
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
