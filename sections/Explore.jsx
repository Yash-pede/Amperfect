"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { TypingText, TitleText } from "@/components/customTexts";
import ExploreCard from "@/components/ExploreCard";
import { exploreWorld } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Projects" textStyles="text-center" />

        <TitleText
          title={
            <>
              Enter Our World of Artistry <br className="md:block hidden" />{" "}
              Ignite Passion
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorld.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world} // all the propertyies that the world has
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
