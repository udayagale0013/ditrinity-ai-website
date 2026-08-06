import Navbar from "../components/layout/Navbar";
;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaHospital,
  FaHeartbeat,
  FaMicroscope,
  FaXRay,
} from "react-icons/fa";

const healthcareSolutions = [
  {
    icon: <FaHospital size={45} />,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
    title: "di Healthcare",
    desc:
      "Cloud-based Healthcare SaaS platform for hospitals, patient management, appointments, EMR, billing, subscriptions and administration."
  },

  {
    icon: <FaHeartbeat size={45} />,
    image:
      
  
"https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200",
    title: "di Oncology",
    desc:
      "Complete Oncology Management System for chemotherapy planning, treatment workflow, nursing records and discharge management."
  },

  {
    icon: <FaMicroscope size={45} />,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
    title: "di Pathology",
    desc:
      "Laboratory Information Management System with barcode integration, reports, billing and workflow automation."
  },

  {
    icon: <FaXRay size={45} />,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900",
    title: "di Radiology",
    desc:
      "Digital Radiology platform for CT, MRI, diagnostic reporting, appointments and imaging workflow."
  }
];

function Technologies() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-950 pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="relative overflow-hidden rounded-3xl h-[520px] flex items-center justify-center text-center"
          >

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/75"></div>

            <div className="relative z-10 max-w-5xl px-6">

              <h1 className="text-6xl font-extrabold text-white">
                Healthcare
                <span className="text-cyan-400"> Solutions</span>
              </h1>

              <p className="text-xl text-gray-200 leading-9 mt-8">
                Intelligent Healthcare Platforms for Hospitals,
                Oncology Centres, Diagnostic Labs and Radiology
                Departments with secure cloud technology and
                digital transformation.
              </p>

            </div>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {healthcareSolutions.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
              group
              bg-[#111827]
              rounded-3xl
              overflow-hidden
              border
              border-gray-700
              hover:border-cyan-400
              hover:shadow-[0_25px_80px_rgba(34,211,238,.30)]
              duration-500
              "
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  className="
                  w-full
                  h-64
                  object-cover
                  group-hover:scale-110
                  duration-700
                  "
                />

              </div>

              <div className="p-8">

                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-cyan-500
                  text-white
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:rotate-12
                  group-hover:scale-110
                  duration-500
                  "
                >
                  {item.icon}
                </div>

                <h2 className="text-3xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-8 mt-5">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="mt-24"
          >

            <div className="bg-[#111827] rounded-3xl border border-gray-700 p-12">

              <h2 className="text-4xl font-bold text-center text-white">
                Why Choose Our Healthcare Platform?
              </h2>

              <p className="text-lg text-gray-400 leading-9 mt-8 text-center max-w-5xl mx-auto">
                Our digital healthcare ecosystem simplifies hospital
                administration, improves patient engagement,
                streamlines diagnostics, automates pathology
                laboratories and empowers doctors with secure,
                cloud-based healthcare technology.
              </p>

            </div>

          </motion.div>
                    <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="mt-20"
          >

            <h2 className="text-4xl font-bold text-white text-center">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

              {[
                "Hospital Management",
                "Patient Registration",
                "Appointment Scheduling",
                "Electronic Medical Records",
                "Oncology Workflow",
                "Pathology Laboratory",
                "Radiology Management",
                "Cloud Infrastructure",
                "Billing & Insurance",
                "Analytics Dashboard",
                "Role Based Security",
                "24×7 Technical Support"
              ].map((item,index)=>(

                <motion.div
                  key={index}
                  whileHover={{
                    y:-10,
                    scale:1.03
                  }}
                  className="
                  bg-[#111827]
                  border
                  border-gray-700
                  hover:border-cyan-400
                  rounded-2xl
                  p-7
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_60px_rgba(34,211,238,.30)]
                  "
                >

                  <h3 className="text-white text-lg font-semibold">
                    ✓ {item}
                  </h3>

                </motion.div>

              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="mt-24"
          >

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-14 text-center">

              <h2 className="text-5xl font-bold text-white">
                Transform Healthcare with diTrinity
              </h2>

              <p className="text-gray-100 text-xl mt-8 leading-9 max-w-3xl mx-auto">
                Empower hospitals, diagnostic centres and laboratories
                with secure cloud technology, intelligent automation,
                scalable healthcare platforms and digital transformation.
              </p>

              <Link
                to="/contact"
                className="
                inline-block
                mt-10
                bg-white
                text-slate-900
                px-10
                py-4
                rounded-xl
                font-bold
                hover:scale-105
                duration-300
                "
              >
                Request Demo
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

     

    </>
  );
}

export default Technologies;