import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="text-blue-100 mt-6 text-lg max-w-3xl mx-auto leading-8">
            Partner with diTrinity to accelerate your digital transformation
            journey through AI, Cloud, Enterprise Solutions, and Software
            Development. Let's build innovative solutions together.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
              >
                Contact Us
              </motion.button>
            </Link>

            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Join Our Team
              </motion.button>
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;