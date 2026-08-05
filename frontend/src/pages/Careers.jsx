import Navbar from "../components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaBrain,
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

const jobs = [
  {
    icon: <FaBrain size={35} />,
    title: "AI Engineer",
    location: "Pune, India",
    type: "Full Time",
    desc: "Build intelligent AI applications using Python, FastAPI, Machine Learning and LLM technologies.",
  },

  {
    icon: <FaLaptopCode size={35} />,
    title: "Full Stack Developer",
    location: "Pune, India",
    type: "Full Time",
    desc: "Develop scalable web applications using React, Node.js, MongoDB and Enterprise technologies.",
  },

  {
    icon: <FaCloud size={35} />,
    title: "Cloud Engineer",
    location: "Remote",
    type: "Full Time",
    desc: "Design and deploy enterprise cloud infrastructure using AWS, Azure and DevOps.",
  },

  {
    icon: <FaDatabase size={35} />,
    title: "PLM / ERP Consultant",
    location: "Hybrid",
    type: "Full Time",
    desc: "Implement PLM, ERP and Digital Engineering solutions for global customers.",
  },
];

function Careers() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0F172A] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <h1 className="text-5xl font-bold text-white">
              Join Our
              <span className="text-cyan-400"> Team</span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
              Be part of a passionate team building AI,
              Cloud, Enterprise Software and Digital
              Transformation solutions for customers
              across the globe.
            </p>

          </motion.div>
                    {/* Why Join Us */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >

            <div className="grid md:grid-cols-3 gap-8">

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,.25)] duration-500"
              >

                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900"
                  className="w-full h-52 object-cover"
                  alt=""
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    Innovative Projects
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    Build AI, Cloud, Enterprise Software and Digital
                    Transformation solutions for global customers.
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,.25)] duration-500"
              >

                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                  className="w-full h-52 object-cover"
                  alt=""
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    Career Growth
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    Learn from experienced professionals, earn
                    certifications and accelerate your career.
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(34,211,238,.25)] duration-500"
              >

                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=900"
                  className="w-full h-52 object-cover"
                  alt=""
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    Flexible Workplace
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    Hybrid, Remote and Office work culture with
                    modern technologies and collaborative teams.
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>
                    {/* Current Openings */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >

            <div className="text-center">

              <h2 className="text-4xl font-bold text-white">
                Current Openings
              </h2>

              <p className="text-gray-400 mt-5 text-lg">
                Explore exciting career opportunities and become part of our growing team.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {jobs.map((job, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                  bg-[#111827]
                  rounded-2xl
                  border
                  border-gray-700
                  hover:border-cyan-400
                  hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                  p-8
                  duration-500
                  "
                >

                  <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white mb-6">
                    {job.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    {job.title}
                  </h2>

                  <p className="text-cyan-400 mt-2">
                    {job.location} • {job.type}
                  </p>

                  <p className="text-gray-400 mt-5 leading-8">
                    {job.desc}
                  </p>

                  <Link to={`/apply/${job.title}`}>

                    <button
                      className="
                      mt-8
                      bg-cyan-500
                      hover:bg-cyan-600
                      px-7
                      py-3
                      rounded-xl
                      text-white
                      font-semibold
                      flex
                      items-center
                      gap-3
                      duration-300
                      "
                    >
                      Apply Now
                      <FaArrowRight />
                    </button>

                  </Link>

                </motion.div>

              ))}

            </div>

          </motion.div>
                    {/* Upload Resume CTA */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >

            <div className="
              bg-gradient-to-r
              from-cyan-600
              to-blue-700
              rounded-3xl
              p-12
              text-center
            ">

              <h2 className="text-4xl font-bold text-white">
                Didn't Find a Suitable Role?
              </h2>

              <p className="text-white mt-6 text-lg max-w-3xl mx-auto leading-8">
                We're always looking for talented engineers,
                developers and technology enthusiasts.
                Upload your resume and we'll contact you
                when a matching opportunity becomes available.
              </p>

              <div className="flex justify-center gap-6 mt-10 flex-wrap">

                <Link to="/apply/general">

                  <button
                    className="
                    bg-white
                    text-cyan-700
                    font-bold
                    px-8
                    py-4
                    rounded-xl
                    hover:bg-gray-100
                    hover:scale-105
                    duration-300
                    "
                  >
                    Upload Resume
                  </button>

                </Link>

                <Link to="/contact">

                  <button
                    className="
                    border-2
                    border-white
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    hover:bg-white
                    hover:text-cyan-700
                    duration-300
                    "
                  >
                    Contact HR
                  </button>

                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );
}

export default Careers;