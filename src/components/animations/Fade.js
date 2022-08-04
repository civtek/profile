import { motion } from "framer-motion";

export const Fade = ({
  duration = 1,
  delay = 0,
  child = null,
  classes = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: duration, delay: delay },
      }}
      viewport={{ once: true }}
      className={classes + " z-20"}
    >
      {child}
    </motion.div>
  );
};
