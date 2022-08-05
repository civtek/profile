import { Fade } from "./animations/Fade";
import { motion } from "framer-motion";

export const About = () => {

  return (
    <div className="w-full h-screen flex bg-dark text-white py-20 px-32 z-20">
      <div className="flex flex-col justify-center gap-5 w-2/5">
        <div className="flex gap-4 font-semibold text-6xl mb-4">
          <Fade child="about"></Fade>
          <Fade child="civtek" classes="text-primary" delay={0.5}></Fade>
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
              <span>The </span>
              <span className="text-primary">first non-profit </span>
              <span>team of </span>
              <span className="text-primary">student developers </span>
              <span>in Hong Kong</span>
            </div>
          </motion.div>
        </div>
        <div>
          <Fade classes="text-xl" delay={1.5} child="civtek is an independent organization led by students from various Hong Kong university, we aim to cultivate students' interests in the various divisions of technology."></Fade>
        </div>
      </div>
      <div className="w-3/5 p-32">
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
            <p className="text-8xl">0</p>
            <p className="text-2xl">members</p>
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
            <p className="text-8xl">0</p>
            <p className="text-2xl">partners</p>
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
            <p className="text-8xl">0</p>
            <p className="text-2xl">products</p>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

