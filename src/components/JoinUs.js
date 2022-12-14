import { Fade } from "./animations/Fade";
import { motion } from "framer-motion";
import Link from "next/link";

export const JoinUs = () => {
  return (
    <div
      id="join"
      className="w-full h-full sm:h-screen relative my-20 sm:my-40 text-white flex flex-col items-center justify-center"
    >
      <div className="sm:absolute w-full h-full sm:h-72 sm:top-0 z-0 flex flex-col items-center justify-center">
        <Fade
          classes="flex justify-center items-center"
          child={
            <div className="flex items-center justify-center flex-col">
              <div className="font-semibold text-6xl sm:text-7xl text-center py-3">
                Join Our Journey
              </div>
              <div className="text-3xl sm:text-4xl sm:mb-48 font-medium text-center w-3/5 mt-10">
                Become a part of our <span className="text-primary">novel</span>{" "}
                and <span className="text-primary">noble</span> technological
                endeavour
              </div>
            </div>
          }
        ></Fade>
      </div>
      {/* <div className="absolute w-full h-32 bg-gradient-to-b from-white to-transparent top-0 opacity-20"></div> */}
      <div className="w-full h-full flex flex-wrap gap-16 items-center justify-center mt-20 sm:mt-48 z-10">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 1.5 },
          }}
          viewport={{ once: true }}
          className="w-80 h-[32rem] flex flex-col justify-between bg-dark border-2 border-primary p-8 "
        >
          <div className="font-semibold text-3xl text-white ">
            <div>
              Join our team
              <p className="text-primary">@ Civtek HQ</p>
            </div>
            <div className="flex flex-row gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-6 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="text-lg">
            Become a part of Hong Kong&apos;s student forefront of technology
            and grow with real impactful projects.
            <br /> <br />
            Our current team members joined Seabank, Tiket.com, Y Combinator
            Startups, and other reputable companies.
          </div>
          <Link href="/join">
            <div className="w-40 flex items-center justify-center p-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
              Apply Now
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 2 },
          }}
          viewport={{ once: true }}
          className="w-80 h-[32rem] flex flex-col justify-between bg-dark border-2 border-primary p-8 "
        >
          <div className="font-semibold text-3xl text-white ">
            <div>
              Become a part of our active{" "}
              <p className="text-primary">Civtek Community</p>
            </div>
            <div className="flex flex-row gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-6 h-2 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="text-lg">
            Join our solid and positive student developer community and get
            access to all of our upcoming events and a network of talented
            like-minded people.
          </div>
          <Link href="/event-regis">
            <div className="w-40 flex items-center justify-center p-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
              Register Now
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, delay: 2.5 },
          }}
          viewport={{ once: true }}
          className="w-80 h-[32rem] flex flex-col justify-between bg-dark border-2 border-primary p-8 "
        >
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
            Accelerate your project through our team of talented devs and
            support our endeavour by working with us.
            <br />
            <br />
            We build impactful products that people love, and we&apos;re sure
            you will love it too.
          </div>
          <a href="mailto:civtek.dev@gmail.com">
            <div className="w-40 flex items-center justify-center p-2 text-lg border border-primary font-medium cursor-pointer hover:bg-primary hover:text-dark transition duration-500 ease-in-out">
              Get in Touch
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
