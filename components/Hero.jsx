"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

function Hero() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText}></div>
            <h1 className={styles.heroHeading}>ness</h1>
          </motion.div>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Manifested
          </motion.h1>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative md:-mt-[20px] mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-16" />
          <img
            src="/hero.jpg"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative -top-11"
          />
          <a
            href="#"
            className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 -top-12"
          >
            <img
              src="/stamp.png"
              alt="Stamp"
              className="h-[110px] sm:h-[155px] object-contain"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
