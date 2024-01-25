import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <div className="flex justify-center">
        {" "}
        {/* Center the content horizontally */}
        <h5 className={`${styles.sectionHeadText}`}> We love our Clients. </h5>
      </div>{" "}
      {/* <p className={`${styles.sectionSubText}`}> What we have done so far</p> */}
      {/* </motion.div> */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center pb-20 mt-1 mb-2 w-full">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
