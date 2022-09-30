import { Fade } from "./animations/Fade";

export const Missions = () => {
  return (
    <div
      id="missions"
      className="bg-dark w-full h-full px-16 sm:px-20 py-40 text-white flex flex-col items-center"
    >
      <div className="w-full h-full bg-cover bg-center">
        <div className="grid sm:grid-cols-3 w-full h-full">
          <div className="text-6xl sm:text-8xl font-semibold flex flex-col justify-center z-20 sm:mb-0 mb-20 text-center sm:text-left">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="group-hover:fill-black"
                >
                  <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                </svg>
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
                  <path d="M10.865 17.097c-2.289.805-5.172-.535-5.755-2.756-2.878-.005-5.086-1.408-5.11-3.886-.038-4.031 4.516-9.448 12-9.455 7.485-.007 11.996 5.312 12 10.329.004 5.017-4.182 6.897-7.607 6.263-.364 1.507-.171 3.578.232 4.747l-2.109.661c-.813-2.788-2.2-4.967-3.651-5.903zm-.692-9.276c-.691-.314-1.173-1.012-1.173-1.821 0-1.104.896-2 2-2s2 .896 2 2c0 .26-.05.509-.14.738 1.214.911 2.405 1.855 3.599 2.794.425-.333.96-.532 1.541-.532 1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.171 0-2.155-.807-2.426-1.895-1.201.098-2.404.173-3.606.254-.169.933-.987 1.641-1.968 1.641-1.104 0-2-.896-2-2 0-1.033.785-1.884 1.79-1.989.121-.731.252-1.46.383-2.19zm2.06-.246c-.297.232-.661.383-1.058.417l-.363 2.18c.504.224.898.651 1.08 1.177l3.647-.289c.047-.267.137-.519.262-.749l-3.568-2.736z" />
                </svg>
                <p className="mt-3">Empower</p>
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
                  <path d="M12.484 24v-5.991l2.224 2.352 4.042-2.12v2.416l-6.266 3.343zm-1-.003l-6.26-3.34v-2.465l4.088 2.245 2.172-2.385v5.945zm-3.7-15.313c.639.777 1.27 1.934 1.459 3.18l-3.208 1.77 5.449 2.891v.042l-2.381 2.614-4.599-2.525-.001.001-1.533-.883 2.254-2.481-2.254-2.121 4.814-2.488zm8.431.031l4.789 2.499-2.255 2.078.001.001 2.254 2.59-1.604.888-4.485 2.353-2.431-2.571v-.003l5.457-2.916-3.169-1.748c.194-1.321.695-2.266 1.443-3.171zm-3.967 5.285h-.521c-.137 0-.269-.046-.359-.127l-.693-.456h2.625l-.693.456c-.09.081-.221.127-.359.127zm1.077-1.167h-2.659c-.161 0-.292-.13-.292-.291 0-.161.131-.292.292-.292h2.659c.161 0 .291.131.291.292 0 .161-.13.291-.291.291zm.288-1.166h-3.251c0-2.304-1.874-3.301-1.874-5.383 0-2.172 1.748-3.367 3.498-3.367 1.75 0 3.502 1.197 3.502 3.367 0 2.082-1.875 3.047-1.875 5.383zm-6.267-5.334h-1.775v-1h1.821c-.039.22-.06.446-.06.676l.014.324zm11.058 0h-1.763l.013-.324c0-.23-.02-.456-.059-.676h1.809v1zm-9.998-3.02c-.227.248-.424.52-.584.811l-1.441-1.023.579-.815 1.446 1.027zm7.17-.005l1.439-1.022.579.815-1.432 1.018c-.161-.291-.359-.563-.586-.811zm-5.307-1.223c-.319.115-.621.261-.901.435l-.773-1.58.898-.44.776 1.585zm3.439-.004l.774-1.581.898.44-.77 1.574c-.281-.172-.583-.318-.902-.433zm-1.22-.272c-.163-.015-.328-.023-.495-.023-.171 0-.339.008-.505.024v-1.81h1v1.809z" />
                </svg>
                <p className="mt-3">Impact</p>
                <p className="text-2xl font-normal pt-5">
                  Build impactful products which people need and love with the
                  sole purpose of working for good
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
                  <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-8.479 3.475l-2.229.933 2.229.93v1.57l-4-1.701v-1.599l4-1.7v1.567zm6 1.732l-4 1.701v-1.57l2.229-.93-2.229-.933v-1.567l4 1.701v1.598z" />
                </svg>
                <p className="mt-3">Experience</p>
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
