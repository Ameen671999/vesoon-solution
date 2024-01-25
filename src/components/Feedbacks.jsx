import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* <p className="text-white font-black text-[48px] ">"</p> */}
    <div className="mt-1">
      <img src={image} alt={`${name}`} className="rounded-full object-cover" />
      <br />
      <h1 className="text-white text-[20px] "> {name} </h1>
      <p className="mt-1 text-secondary text-[18px]">
        {designation} of {company}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Innovating Together, Shaping the Future of DOOH Advertising{" "}
          </p>
          <h2 className={styles.sectionHeadText}>Team.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonials, index) => (
          <FeedbackCard
            key={testimonials.name}
            index={index}
            {...testimonials}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
