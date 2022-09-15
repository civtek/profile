import { Fade } from "./animations/Fade";

export const Team = () => {
  return (
    <div
      id="team"
      className="bg-dark w-full h-full px-16 sm:px-20 py-20 sm:py-40 text-white flex flex-col items-center"
    >
      <Fade
        child="Our Team"
        classes="text-6xl sm:text-7xl text-center sm:text-left font-semibold mb-10 z-20"
      ></Fade>
      <Fade
        child={
          <div className="text-4xl font-medium mb-20 text-center z-20">
            We are a team of <span className="text-primary">diverse</span>{" "}
            talents who{" "}
            <span className="text-primary">work together as one</span>
            <br /> to build our <span className="text-primary">community</span>
          </div>
        }
        delay={0.5}
      ></Fade>

      <div className="grid sm:grid-rows-3 gap-y-5 z-20">
        <div className="grid sm:grid-cols-5 gap-x-3 sm:gap-y-0 gap-y-10">
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-vannes bg-cover bg-left-top
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Vannes Wijaya</div>
            <div>Chief Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-vabel bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Seivabel Jessica Halim</div>
            <div>External Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-un bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Enryl Einhard</div>
            <div>Internal Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-peve bg-cover bg-bottom
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Patricia Vianney</div>
            <div>Public Relations Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-stefan bg-cover bg-left-top
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Stefan Rafael</div>
            <div>Product Director</div>
          </div>
        </div>
        <div className="grid sm:grid-cols-5 gap-x-3 sm:gap-y-0 gap-y-10">
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-jodi bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Jonathan Andika</div>
            <div>Operations Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-utap bg-cover bg-bottom
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Benedict Ronaldo Gustaf</div>
            <div>Event Director</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-lim bg-cover
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Michael Lim</div>
            <div>Advisor</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-kelvin bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Kelvin Hartono</div>
            <div>Advisor</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-michelle bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Michelle Karen</div>
            <div>Advisor</div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 flex flex-col gap-x-3 sm:gap-y-0 gap-y-10">
          <div className="hidden sm:flex flex-col items-center">
            <div
              className="
                    relative
                    w-56
                    h-64
                    mb-5
                  "
            ></div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-jason bg-cover bg-center
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Jason William Nursalim</div>
            <div>Software Development Lead</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-madison bg-cover
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Kanokkorn Panatte</div>
            <div>Product Design Lead</div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="
                  relative
                  w-56
                  h-64
                  shadow-lg
                  bg-shannon bg-cover
                  cursor-pointer
                  group
                  mb-5
                "
            >
              <div
                className="
                    bg-primary
                    absolute
                    opacity-30
                    w-full
                    h-full
                    inset-0
                    group-hover:opacity-0
                    transition
                    duration-500
                    ease-in-out
                  "
              ></div>
            </div>
            <div className="font-bold">Shannon Sie Santosa</div>
            <div>Product Design Co-Lead</div>
          </div>
        </div>
      </div>
    </div>
  );
};
