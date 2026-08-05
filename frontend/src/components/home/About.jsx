import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-[#111827] py-24">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-semibold uppercase">
            About diTrinity
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Driving Digital Innovation with AI
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            diTrinity Technologies provides AI, Cloud, ERP, PLM and Digital
            Transformation solutions for global enterprises. We help businesses
            modernize their operations through innovative technology and
            intelligent automation.
          </p>


          <Link to="/about">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
              Learn More
            </button>
          </Link>


        </motion.div>


        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
            alt="About"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>


      </div>
    </section>
  );
}

export default About;