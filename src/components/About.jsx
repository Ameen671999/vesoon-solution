import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
           flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        Welcome to Vesoon Advertisement Solutions, where we're transforming
        Out-of-Home (OOH) advertising with cutting-edge technology. We're
        turning static, unengaging ads into dynamic, interactive experiences
        using IoT-enabled screens, bringing the excitement of blockbusters to
        traditional silent movie-like ads. Our AI-driven approach takes the
        guesswork out of outdoor advertising, offering smarter, data-driven
        campaigns with real-time audience engagement tracking. For businesses
        and advertising agencies, our dedicated website simplifies connections,
        making the journey towards impactful advertising partnerships smoother.
        Vesoon is not just for businesses, but also for our partners in social
        venues and the wider audience, offering everyone involved the latest in
        engaging, effective advertising solutions. Join us at Vesoon to
        revolutionize your DOOH advertising approach and connect with your
        audience like never before.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
