"use client";

import { motion } from "framer-motion";
import { navVariants, staggerContainer, fadeIn } from "@/utils/motion";
import styles from "@/styles";
import { TypingText } from "@/components/customTexts";

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
          viewport={{ once: false, amount: 1 }}
        >
          <TypingText title="| About Amperfect" textStyles="text-centre" />
        </motion.div>
        <motion.h2
          variants={fadeIn("down", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white relative bottom-5"
        >
          Welcome to
          <span className="font-semibold"> Amperfect&nbsp;</span>, where
          we embrace the beauty of
          <span className="font-semibold">
            &nbsp;imperfection and ignite creativity&nbsp;
          </span>
          through our unique approach. Our team consists of passionate
          individuals who strive for excellence and aren't afraid to push the
          boundaries. We believe in the power of madness, and it fuels our drive
          to innovate and create something truly exceptional.
          <span className="font-semibold">
            Our mission is to inspire others to unleash their inner madness and
            embrace their creative potential.&nbsp;
          </span>
          At Amperfect , we provide a platform for you to explore,
          experiment, and express your ideas without limits. Join us on this
          exciting journey and experience the perfect madness!
        </motion.h2>
        
          <motion.img
            variants={fadeIn("down", 'tween', 1, 0.3)}
            initial='hidden'
            whileInView='show'
          src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain m-auto"
        />

      </motion.div>
    </section>
  );
}

export default About;
