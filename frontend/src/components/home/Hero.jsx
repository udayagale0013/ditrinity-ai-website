import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-24 lg:pt-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 flex items-center">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full top-0 -left-20"></div>
      <div className="absolute w-96 h-96 bg-indigo-600/20 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-4">
            Welcome to diTrinity Technologies
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Accelerating Your
            <span className="text-cyan-400"> Digital Transformation</span>
          </h1>

          <p className="text-gray-300 text-lg mt-8 leading-8">
            diTrinity Technologies, a global consulting company, helps you
            throughout your digital transformation journey. Customers value us
            as a reliable technology partner with a consulting-led approach,
            delivering high-quality solutions on time.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => navigate("/services")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transition duration-300 hover:scale-105"
            >
              Explore Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              Contact Us
            </button>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80"
            alt="Digital Technology"
            className="rounded-3xl shadow-[0_20px_60px_rgba(0,255,255,0.25)] border border-cyan-500/20"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;