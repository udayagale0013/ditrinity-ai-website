import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaCloud,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb size={40} />,
    title: "Innovation Driven",
    desc: "Delivering modern AI, Cloud, ERP and PLM solutions for digital transformation.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Experienced Team",
    desc: "Highly skilled professionals with expertise in enterprise technologies.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Quality & Security",
    desc: "Building secure, reliable and scalable enterprise applications.",
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Expertise",
    desc: "Providing cloud-native solutions using AWS, Azure and enterprise platforms.",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Fast Delivery",
    desc: "Agile development process ensuring timely and quality project delivery.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Customer First",
    desc: "Creating long-term partnerships through trust, transparency and support.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[#0B1120] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Why Choose <span className="text-blue-500">diTrinity?</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We combine innovation, technology, and industry expertise to
            deliver intelligent digital solutions that help businesses grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -10,
              }}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;