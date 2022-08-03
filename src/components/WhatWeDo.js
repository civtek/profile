export const WhatWeDo = () => {
  return (
    <section className="bg-dark w-full h-full p-20 text-white flex flex-col items-center">
      <div className="w-full h-full bg-cover bg-center">
        <div className="grid grid-cols-3 w-full h-full">
          <div className="text-8xl text-white font-semibold ml-10 flex flex-col justify-center">
            What <span className="text-primary">We</span> Do
          </div>

          <div className="grid grid-rows-2 w-full h-full">
            <div
              className="
              border border-white 
              flex flex-col
              cursor-pointer
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
              "
              >
                <p className="">Projects</p>
                <p className="text-2xl font-extralight pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
            <div
              className="
              border border-t-0 border-white 
              flex flex-col
              cursor-pointer
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
              "
              >
                <p className="">Networking</p>
                <p className="text-2xl font-extralight pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 w-full h-full">
            <div
              className="
              border border-l-0 border-white 
              flex flex-col
              cursor-pointer
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
              "
              >
                <p className="">Trainings</p>
                <p className="text-2xl font-extralight pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam autem inventore laborum nesciunt.
                </p>
              </div>
            </div>
            <div
              className="
              border border-t-0 border-l-0 border-white 
              flex flex-col
              cursor-pointer
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
              "
              >
                <p className="">Events</p>
                <p className="text-2xl font-extralight pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
