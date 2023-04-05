"use client";

import { motion } from "framer-motion";
import { navVariants, staggerContainer, textVariant } from "@/utils/motion";
import styles from "@/styles";

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div>
        <div className="gradient-02 "></div>
        <motion.div
          className={`${styles.paddings} text-center leading-[40px] font-medium m-4 sm:m-6 md:m-2`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once:'false', amount:1}}
        >
          <motion.h2
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
          >
            Welcome to
            <span className="font-semibold"> Amperfect Madness&nbsp;</span>,
            where we embrace the beauty of
            <span className="font-semibold">
              &nbsp;imperfection and ignite creativity&nbsp;
            </span>
            through our unique approach. Our team consists of passionate
            individuals who strive for excellence and aren't afraid to push the
            boundaries. We believe in the power of madness, and it fuels our
            drive to innovate and create something truly exceptional.
            <span className="font-semibold">
              Our missionis to inspire others to unleash their inner madness and
              embrace their creative potential.&nbsp;
            </span>
            At Amperfect Madness, we provide a platform for you to explore,
            experiment, and express your ideas without limits. Join us on this
            exciting journey and experience the perfect madness!
          </motion.h2>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
