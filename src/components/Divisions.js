import { Fade } from "./animations/Fade";

export const Divisions = () => {
  return (
    <div
      id="divisions"
      className="bg-dark w-full h-full px-16 sm:px-20 py-40 text-white flex flex-col items-center"
    >
      <Fade
        classes="flex justify-center items-center"
        child={
          <div className="flex items-center justify-center flex-col">
            <div className="font-semibold text-6xl sm:text-7xl text-center py-3">
              Our <span className="text-primary">Divisions</span>
            </div>
            <div className="text-4xl mb-20 font-medium text-center w-3/5 mt-10">
              Each of us has our own <span className="text-primary">way</span>{" "}
              of making an <span className="text-primary">impact</span>
            </div>
          </div>
        }
      ></Fade>
      <div className="w-3/4 h-full">
        <div className="grid sm:grid-cols-3 w-full h-full">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="group-hover:fill-black"
                >
                  <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
                </svg>

                <p className="mt-4">Software Development</p>
                <p className="text-2xl font-normal pt-5">
                  Grow as a software engineer and boost your tech career
                  potential with us. You will get a chance to work on exciting
                  products and learn the best engineering practices by building
                  web and mobile applications.
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="group-hover:fill-black"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-15.667-6l-5.333 4v-4h-3v-14.001l18 .001v14h-9.667zm-6.333-2h3v2l2.667-2h8.333v-10l-14-.001v10.001z" />
                </svg>
                <p className="mt-7">External Affairs</p>
                <p className="text-2xl font-normal pt-5">
                  Come up with creative ideas to increase our outreach and
                  partnerships at Civtek. You will get to directly communicate
                  with external partners (clients, sponsors, etc.) as well as
                  build and closely maintain our relationships with them. You
                  will also broaden our public outreach and manage our campaigns
                  & channels.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 w-full h-full z-20">
            <div
              className="
              border-2 sm:border-l-0 border-primary 
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
                <svg
                  width="70"
                  height="70"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="group-hover:fill-black"
                >
                  <path d="M14.757 20.171c-.791.523-1.738.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.019-.306 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-9.082-1.171c-3.438 0-5.675-2.629-5.675-5.5 0-2.702 1.951-4.945 4.521-5.408.212-3.951 3.473-7.092 7.479-7.092s7.267 3.141 7.479 7.092c2.57.463 4.521 2.706 4.521 5.408 0 2.855-2.218 5.5-5.675 5.5.3-.63.508-1.31.608-2.026 1.726-.214 3.067-1.691 3.067-3.474 0-2.969-2.688-3.766-4.432-3.72.323-3.983-2.115-6.78-5.568-6.78-3.359 0-5.734 2.562-5.567 6.78-1.954-.113-4.433.923-4.433 3.72 0 1.783 1.341 3.26 3.068 3.474.099.716.307 1.396.607 2.026m6.325-6c1.655 0 3 1.345 3 3s-1.345 3-3 3c-1.656 0-3-1.345-3-3s1.344-3 3-3" />
                </svg>
                <p className="mt-7">Data Science & AI</p>
                <p className="text-2xl font-normal pt-5">
                  Get closer to your dream of becoming a data scientist or AI
                  engineer, and cultivate your skills with us. You will dive
                  deeper into the current emerging tech field and maximize your
                  potential in the field of data. You will build practical data
                  science & AI projects and join data science-related
                  competitions with people of the same interest.
                </p>
              </div>
            </div>
            <div
              className="
              border-2 border-t-0 sm:border-l-0 border-primary 
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
                <svg
                  width="70"
                  height="70"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="group-hover:fill-black"
                >
                  <path d="M13.5 20c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-10.502 4c-.598 0-2.429-1.754-2.747-4.304-.424-3.414 2.124-5.593 4.413-5.87.587-1.895 2.475-4.684 6.434-4.77.758-1.982 3.409-4.507 6.84-3.186 1.647.634 3.101 2.101 3.705 3.737.231.624-.71.965-.937.347-.51-1.378-1.737-2.615-3.127-3.151-2.577-.99-4.695.731-5.422 2.298 1.107.12 2.092.455 2.755.889.909.594 1.473 1.558 1.508 2.577.031.889-.33 1.687-.991 2.187-.654.496-1.492.643-2.298.404-.966-.286-1.748-1.076-2.143-2.169-.287-.793-.384-1.847-.178-2.921-3.064.185-4.537 2.306-5.075 3.742 1.18.102 2.211.574 2.831 1.012.959.676 1.497 1.6 1.513 2.599.015.859-.363 1.664-1.011 2.155-.608.46-1.535.599-2.363.348-.961-.289-1.7-1.041-2.079-2.118-.255-.723-.375-1.776-.204-2.919-1.631.361-3.512 1.995-3.178 4.685.18 1.448 1.008 2.888 2.015 3.502.43.261.242.926-.261.926zm17.308-10.026l1.205 2.225 2.489.459-1.744 1.833.333 2.509-2.283-1.092-2.283 1.092.333-2.509-1.744-1.833 2.489-.459 1.205-2.225zm-14.85.822c-.202 1.024-.128 1.993.113 2.678.347.984.966 1.355 1.424 1.492.604.183 1.175.036 1.472-.187.388-.294.624-.808.614-1.34-.011-.673-.398-1.313-1.09-1.801-.545-.385-1.479-.803-2.533-.842zm6.373-4.716c-.226 1.018-.11 1.99.099 2.569.287.79.828 1.356 1.486 1.55.501.148 1.014.06 1.411-.242.398-.301.615-.795.596-1.355-.025-.705-.409-1.353-1.056-1.775-.511-.334-1.448-.657-2.536-.747zm-7.329-10.08l1.468 2.711 3.032.558-2.124 2.234.405 3.057-2.781-1.331-2.781 1.331.405-3.057-2.124-2.234 3.032-.558 1.468-2.711zm17 0c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
                </svg>
                <p className="mt-7">Event & Community</p>
                <p className="text-2xl font-normal pt-5">
                  Have some cool event ideas? Passionate about building a
                  community? This is the right team for you. You will be at the
                  center of our vast community of tech enthusiasts and you will
                  be responsible for creating events and projects that will
                  tighten our Civtek community.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 w-full h-full z-20">
            <div
              className="
              border-2 sm:border-l-0 border-primary 
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="group-hover:fill-black"
                >
                  <path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z" />
                </svg>
                <p className="mt-7">Product Design</p>
                <p className="text-2xl font-normal pt-5">
                  Put your passion for design and products into practice by
                  working with us. You will get hands-on design experience and
                  skills, ranging from UI/UX to digital products, and learn the
                  best practices and principles in design.
                </p>
              </div>
            </div>
            <div
              className="
              border-2 border-t-0 sm:border-l-0 border-primary 
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="group-hover:fill-black"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <p className="mt-7">Content Creation</p>
                <p className="text-2xl font-normal pt-5">
                  We believe the Hong Kong tech community deserves more
                  recognition, and you will help them share their stories
                  through our YouTube content. Whether that&apos;s career
                  advice, a day in the life of an HK developer, or a story of
                  how they joined the tech industry, you will provide people in
                  our community a platform to share their stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
