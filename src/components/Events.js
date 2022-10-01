import Link from "next/link";

export const Events = () => {
  return (
    <div
      id="events"
      className="bg-dark w-full h-full px-40 pt-40 pb-40 text-white flex flex-col items-center"
    >
      <div className="border-2 border-primary w-full p-40 sm:p-32 z-20 flex flex-col items-center justify-center">
        <div className="font-semibold text-5xl text-center">
          Join our <span className="text-primary">civtek community</span> and
          participate in exciting events!
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-20 gap-20">
          <div className="flex flex-col items-center">
            <div
              className="
                  w-72
                  h-72
                  border-primary border-2
                  bg-event bg-cover bg-left-top
                  cursor-pointer
                  group
                  mb-5
                "
            ></div>
            <div className="text-4xl">Our next event</div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center text-5xl sm:text-6xl font-semibold sm:text-left text-center">
              <div>
                Civtek <span className="text-primary">Kick-off</span> Gathering
              </div>
              <div className="text-5xl font-normal mt-3 text-primary">
                Meet your fellow techies!
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-4xl sm:text-left text-center">
              <div>October 8, 2022</div>
              <div>Tamar Park, Admiralty</div>
              <div>16.00 - 18.00 HKT</div>
            </div>
            <Link href="/event-regis">
              <button className="text-white transition-all delay-100 ease-in-out duration-500 bg-dark hover:bg-primary hover:text-black border-2 border-primary font-medium text-2xl w-full px-5 py-2.5 text-center">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
