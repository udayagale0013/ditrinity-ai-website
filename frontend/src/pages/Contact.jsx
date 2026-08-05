import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://127.0.0.1:8000/contact",
        formData
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Message Sending Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white">
            Get In
            <span className="text-cyan-400"> Touch</span>
          </h1>

          <p className="text-gray-400 mt-8 text-xl max-w-4xl mx-auto leading-9">
            We'd love to hear from you. Whether you're looking
            for AI Solutions, Cloud Services, Enterprise Software,
            PLM, ERP or Digital Transformation,
            our experts are ready to help your business
            accelerate innovation.
          </p>
        </motion.div>


        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {[
            {
              icon: <FaMapMarkerAlt size={28} />,
              title: "Office",
              value: "Pune, Maharashtra, India",
            },
            {
              icon: <FaEnvelope size={28} />,
              title: "Email",
              value: "info@ditrinity.com",
            },
            {
              icon: <FaPhoneAlt size={28} />,
              title: "Phone",
              value: "+91 XXXXX XXXXX",
            },
            {
              icon: <FaClock size={28} />,
              title: "Working Hours",
              value: "Mon - Fri | 9:00 AM - 6:00 PM",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                bg-[#111827]
                rounded-3xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
                p-8
                duration-500
                text-center
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-cyan-500
                  mx-auto
                  flex
                  items-center
                  justify-center
                  text-white
                  group-hover:rotate-12
                  duration-500
                "
              >
                {item.icon}
              </div>

              <h2 className="text-white text-2xl font-bold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-5 leading-7">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>


        {/* Contact Form + Google Map */}

        <div className="grid lg:grid-cols-2 gap-12 mt-24">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-[#111827]
              border
              border-gray-700
              hover:border-cyan-400
              rounded-3xl
              p-10
              transition-all
              duration-500
            "
          >

            <h2 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Email */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Phone */}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Company */}

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Subject */}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Message */}

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#1F2937] border border-gray-600 rounded-xl p-4 text-white focus:border-cyan-400 outline-none duration-300"
              />


              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  text-white
                  font-bold
                  py-4
                  rounded-xl
                  hover:scale-[1.02]
                  duration-300
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>


          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-[#111827]
              border
              border-gray-700
              hover:border-cyan-400
              rounded-3xl
              p-5
              transition-all
              duration-500
            "
          >

            <h2 className="text-3xl font-bold text-white mb-6">
              Find Us
            </h2>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
              loading="lazy"
              className="w-full h-[600px] rounded-2xl"
            ></iframe>

          </motion.div>

        </div>


        {/* CTA Section */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
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
              Let's Build Something Amazing Together
            </h2>

            <p className="text-white text-lg mt-8 max-w-4xl mx-auto leading-8">
              Whether you're planning a new software product,
              modernizing enterprise applications, implementing
              AI solutions or migrating to the cloud,
              our experts are ready to help you at every stage.
            </p>

            {/* Schedule Consultation */}

            <button
              type="button"
              onClick={() => navigate("/contact")}
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
              Schedule a Free Consultation
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;