

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      

      <section className="bg-[#0F172A] min-h-screen pt-8 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          {/* Hero Section */}

          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <h1 className="text-6xl font-bold text-white">
              About
              <span className="text-cyan-400">
                {" "}diTrinity Technologies
              </span>
            </h1>


            <p className="text-gray-300 mt-8 max-w-4xl mx-auto text-xl leading-9">

              diTrinity Technologies is a global technology consulting
              company helping organizations accelerate Digital
              Transformation through AI, Cloud, Enterprise Software,
              PLM and ERP Solutions. We build secure, scalable and
              future-ready digital products for businesses worldwide.

            </p>

          </motion.div>



          {/* Story Section */}


          <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">


            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="text-4xl font-bold text-white">
                Our Story
              </h2>


              <p className="text-gray-300 mt-8 leading-8 text-lg">

                diTrinity Technologies was founded in

                <span className="text-cyan-400 font-semibold">
                  {" "}2018
                </span>

                {" "}with a vision to become a trusted partner in
                Digital Transformation Consulting.

              </p>


              <p className="text-gray-300 mt-6 leading-8 text-lg">

                What started as a focused PLM consulting initiative
                has grown into a technology-driven organization
                delivering AI-powered, Cloud-enabled and Enterprise
                Solutions across multiple industries worldwide.

              </p>


              <p className="text-gray-300 mt-6 leading-8 text-lg">

                Today we help organizations modernize operations,
                simplify complex workflows and confidently embrace
                innovation through emerging technologies.

              </p>


            </motion.div>



            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <div
                className="
                bg-[#111827]
                rounded-3xl
                overflow-hidden
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                <img
                  src="https://img1.wsimg.com/isteam/ip/1ced1d51-abbd-4792-9d21-0b786404d146/story.png"
                  alt="Our Story"
                  className="
                  w-full
                  h-[420px]
                  object-cover
                  hover:scale-105
                  duration-700
                  "
                />

              </div>

            </motion.div>


          </div>



          {/* Expertise Section */}


          <div className="mt-28">


            <motion.h2
              initial={{ opacity: 0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{duration:.8}}
              className="text-4xl text-center font-bold text-white"
            >
              Our Expertise
            </motion.h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
                            {/* PLM */}

              <motion.div
                whileHover={{ y:-12, scale:1.03 }}
                className="
                bg-[#111827]
                p-8
                rounded-2xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                <FaCogs className="text-5xl text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  PLM Solutions
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  Enterprise Product Lifecycle Management
                  solutions that improve engineering,
                  collaboration and product innovation.
                </p>

              </motion.div>



              {/* Cloud */}

              <motion.div
                whileHover={{ y:-12, scale:1.03 }}
                className="
                bg-[#111827]
                p-8
                rounded-2xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                <FaCloud className="text-5xl text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  Cloud Technologies
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  Secure cloud migration, DevOps,
                  Infrastructure Automation and scalable
                  AWS & Azure cloud solutions.
                </p>

              </motion.div>



              {/* ERP */}

              <motion.div
                whileHover={{ y:-12, scale:1.03 }}
                className="
                bg-[#111827]
                p-8
                rounded-2xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                <FaDatabase className="text-5xl text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  ERP Systems
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  SAP, Oracle and Enterprise Resource
                  Planning solutions that streamline
                  business operations.
                </p>

              </motion.div>



              {/* AI */}

              <motion.div
                whileHover={{ y:-12, scale:1.03 }}
                className="
                bg-[#111827]
                p-8
                rounded-2xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                <FaRobot className="text-5xl text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  AI Platforms
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  Generative AI, Machine Learning,
                  Intelligent Automation and enterprise
                  AI solutions.
                </p>

              </motion.div>


            </div>

          </div>




          {/* Mission Vision Values */}


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-28">


            {[
              {
                icon:<FaBullseye className="text-5xl text-cyan-400 mb-6"/>,
                title:"Mission",
                desc:"Empower organizations with AI, Cloud and Enterprise technologies that accelerate innovation and business growth."
              },

              {
                icon:<FaEye className="text-5xl text-cyan-400 mb-6"/>,
                title:"Vision",
                desc:"Become one of the world's most trusted Digital Transformation and Enterprise Technology partners."
              },

              {
                icon:<FaHandshake className="text-5xl text-cyan-400 mb-6"/>,
                title:"Core Values",
                desc:"Innovation, Integrity, Collaboration, Customer Success and Continuous Learning."
              },

              {
                icon:<FaGlobe className="text-5xl text-cyan-400 mb-6"/>,
                title:"Global Presence",
                desc:"Delivering PLM, AI, Cloud and Enterprise solutions to customers across Europe, USA, Japan and India."
              }

            ].map((item,index)=>(


              <motion.div
                key={index}
                initial={{opacity:0,y:60}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  duration:.6,
                  delay:index*.1
                }}
                whileHover={{
                  y:-12,
                  scale:1.03
                }}
                className="
                bg-[#111827]
                p-8
                rounded-2xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                transition-all
                duration-500
                "
              >

                {item.icon}

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>


                <p className="text-gray-400 mt-5 leading-7">
                  {item.desc}
                </p>


              </motion.div>


            ))}


          </div>
                    {/* CTA Section */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-28"
          >

            <div
              className="
              bg-gradient-to-r
              from-cyan-600
              to-blue-700
              rounded-3xl
              p-14
              text-center
              "
            >

              <h2 className="text-5xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>


              <p className="text-white text-lg mt-8 max-w-4xl mx-auto leading-8">

                Partner with diTrinity Technologies to accelerate
                digital transformation through AI, Cloud, PLM,
                ERP and Enterprise Software Solutions.
                Together we'll build secure, scalable and
                future-ready technology for your business.

              </p>



              <Link to="/contact">

                <button
                  className="
                  mt-10
                  bg-white
                  text-cyan-700
                  px-10
                  py-4
                  rounded-xl
                  font-bold
                  hover:bg-gray-100
                  hover:scale-105
                  duration-300
                  "
                >
                  Contact Our Experts
                </button>

              </Link>


            </div>

          </motion.div>


        </div>

      </section>


      


    </>
  );
}


export default About;