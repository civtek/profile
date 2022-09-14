import { Fade } from "./animations/Fade";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row text-white py-20 px-32 z-20">
      <div className="flex flex-col justify-center gap-5 w-full md:w-1/2">
        <div className="flex gap-4 font-semibold text-6xl mb-4">
          <Fade child="About"></Fade>
          <Fade child="Civtek" classes="text-primary" delay={0.5}></Fade>
        </div>
        <div className="text-3xl font-medium">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <div>
              The first ever all-in-one{" "}
              <span className="text-primary">not-for-profit</span> software
              development agency and a{" "}
              <span className="text-primary">student tech society</span> in Hong
              Kong
            </div>
          </motion.div>
        </div>
        <div>
          <Fade
            classes="text-xl mt-5"
            delay={1.5}
            child="We work with NGOs and groups to help make the world a better place through technology.

            We also provide students a chance to sharpen their tech skills through impactful real-life projects and network with like-minded people in the soon-to-be biggest student developer community in Hong Kong. "
          ></Fade>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-3 gap-8 w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 1.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 items-center justify-center border-2 h-full border-primary rounded-sm">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M7 16.462l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm15-11.497l-6.5 3.468v-7.215l6.5-3.345v7.092zm-7.5-3.771v7.216l-6.458-3.445v-7.133l6.458 3.362zm-3.408-5.589l6.526 3.398-2.596 1.336-6.451-3.359 2.521-1.375zm10.381 1.415l-2.766 1.423-6.558-3.415 2.872-1.566 6.452 3.558z" />
              </svg>
              <p className="text-2xl">Impactful Projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 2 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 items-center justify-center border-2 h-full border-primary rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z" />
              </svg>
              <p className="text-2xl">Community & Events</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 2.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 items-center justify-center border-2 h-full border-primary rounded-sm">
              <svg
                width="80"
                height="80"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z" />
              </svg>
              <p className="text-2xl">Tools & Education</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
