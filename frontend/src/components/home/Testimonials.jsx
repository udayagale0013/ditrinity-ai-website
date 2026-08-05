import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechNova",
    review:
      "diTrinity Technologies delivered our AI solution on time with outstanding quality. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "Project Manager, CloudX",
    review:
      "Their cloud migration service was smooth and professional. Great support throughout the project.",
  },
  {
    name: "Michael Johnson",
    role: "Director, Global ERP",
    review:
      "Excellent ERP implementation and digital transformation expertise. The team exceeded expectations.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0B1220] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Trusted by businesses worldwide for AI, Cloud, ERP and Digital
            Transformation solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#111827] border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;