import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { whatsapp } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: [value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wds6ufh",
        "template_ckjxeuj",
        {
          from_name: form.name,
          to_name: "Vesoon",
          from_email: form.email,
          to_email: "ameenkarkhan@gmail.com",
          phone: form.phone,
          message: form.message,
        },
        "o40VjmtTXiI4rl0_0"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went Wrong");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/919677721441"
            style={{ color: "green", fontWeight: "bold" }}
          >
            Phone number: &nbsp;&nbsp;
            <span style={{ color: "white", fontWeight: "bold" }}>
              9677721441
            </span>
            &nbsp;&nbsp;
            <img
              src={whatsapp} // Replace with the actual path to your WhatsApp logo image
              alt="WhatsApp Logo"
              style={{
                width: "25px",
                height: "25px",
                float: "right", // Add this CSS property to float the image to the right
              }}
            />
          </a>
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
            text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
            text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Phone No.</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your Phone Number"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
            text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-tertiary py-4 px-6 placeholder: text-secondary
            text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="bg-secondary py-3 px-8 
          outline-none w-fit text-white
          font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending.." : "Send"}{" "}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[1] xl:h-auto md-h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
