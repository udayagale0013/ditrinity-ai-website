import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiAzuredevops,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact size={45} />,
    name: "React.js",
    desc: "Build fast, interactive and modern user interfaces.",
  },
  {
    icon: <FaNodeJs size={45} />,
    name: "Node.js",
    desc: "Powerful backend development for scalable applications.",
  },
  {
    icon: <FaPython size={45} />,
    name: "Python",
    desc: "AI, Machine Learning and automation development.",
  },
  {
    icon: <SiFastapi size={45} />,
    name: "FastAPI",
    desc: "High-performance APIs for AI and enterprise systems.",
  },
  {
    icon: <SiJavascript size={45} />,
    name: "JavaScript",
    desc: "Modern frontend and backend web development.",
  },
  {
    icon: <SiMongodb size={45} />,
    name: "MongoDB",
    desc: "Flexible NoSQL database for scalable applications.",
  },
  {
    icon: <SiMysql size={45} />,
    name: "MySQL",
    desc: "Reliable relational database for enterprise software.",
  },
  {
    icon: <FaAws size={45} />,
    name: "AWS Cloud",
    desc: "Secure cloud infrastructure and deployment services.",
  },
  {
    icon: <SiAzuredevops size={45} />,
    name: "Azure",
    desc: "Cloud solutions and DevOps implementation.",
  },
  {
    icon: <FaDocker size={45} />,
    name: "Docker",
    desc: "Containerized application deployment.",
  },
  {
    icon: <FaGitAlt size={45} />,
    name: "Git",
    desc: "Version control and collaborative development.",
  },
  {
    icon: <SiTailwindcss size={45} />,
    name: "Tailwind CSS",
    desc: "Rapid UI development with utility-first CSS.",
  },
];

function Technologies() {
  return (
    <>
      <Navbar />

      <section className="bg-[#0F172A] min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-8">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white">
              Our <span className="text-blue-500">Technologies</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
              We use modern technologies to build secure, scalable and
              intelligent digital solutions.
            </p>
          </motion.div>


          {/* Technology Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#111827] rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center text-white mb-6">
                  {tech.icon}
                </div>

                <h2 className="text-2xl font-bold text-white">
                  {tech.name}
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                  {tech.desc}
                </p>

              </motion.div>
            ))}

          </div>



          {/* Healthcare Image CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24 relative rounded-3xl overflow-hidden"
          >

            <img
              src="https://retinalscreenings.com/wp-content/uploads/2022/09/benefits-of-tech-in-healthcare-scaled.jpg"
              alt="Healthcare Digital Innovation"
              className="w-full h-[420px] object-cover"
            />


            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

              <div className="text-center px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-white">

                  Transform Healthcare with
                  <span className="text-blue-400">
                    {" "}Digital Innovation
                  </span>

                </h2>


                <p className="text-white/90 mt-6 text-lg max-w-3xl mx-auto leading-8">

                  Empower your healthcare organization with secure,
                  scalable and intelligent digital solutions designed for
                  hospitals, laboratories, oncology centers and diagnostic
                  facilities.

                </p>


                <Link
                  to="/contact"
                  className="inline-block mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
                >
                  Contact Our Experts
                </Link>


              </div>

            </div>


          </motion.div>


        </div>
      </section>


      <Footer />

    </>
  );
}

export default Technologies;