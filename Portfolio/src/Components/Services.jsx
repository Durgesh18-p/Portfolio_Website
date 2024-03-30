import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Experience</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>Actnable AI</h3>
          <p>Software Developer Intern</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaReact />
          <span style={{ color: "#f26440" }}>Work</span>
          <ul>
            <li
              style={{
                listStyle: "none",
                margin: "5px",
              }}
            >
              <p>Built Frontend from scratch using React JS.</p>
            </li>
            <li
              style={{
                listStyle: "none",
                margin: "5px",
              }}
            >
              Integrated python API with frontend.
            </li>
            <li
              style={{
                listStyle: "none",
                margin: "5px",
              }}
            >
              Worked on kafka server and MinIo, a cloud based database.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
