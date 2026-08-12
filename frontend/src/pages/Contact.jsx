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

const API_URL = "https://ditrinity-ai-backend.onrender.com";

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

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // SUBMIT CONTACT FORM
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Basic validation
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!formData.subject.trim()) {
      alert("Please enter the subject.");
      return;
    }

    if (!formData.message.trim()) {
      alert("Please enter your message.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/contact`,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        {
          timeout: 120000,
        }
      );

      console.log(
        "Contact Response:",
        response.data
      );

      if (response.data?.success !== false) {
        alert(
          "Message Sent Successfully!\n\nThank you for contacting diTrinity Technologies."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        alert(
          response.data?.message ||
            "Message sending failed."
        );
      }
    } catch (error) {
      console.error(
        "Contact Submit Error:",
        error
      );

      if (error.response) {
        console.error(
          "Status:",
          error.response.status
        );

        console.error(
          "Response:",
          error.response.data
        );

        alert(
          error.response.data?.message ||
            "Message sending failed. Please try again."
        );
      } else if (error.request) {
        alert(
          "Unable to connect to the server. Please check your internet connection."
        );
      } else {
        alert(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] pt-4 pb-16 sm:pb-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">

            Get In{" "}

            <span className="text-cyan-400">
              Touch
            </span>

          </h1>

          <p className="
            text-gray-400
            mt-5
            sm:mt-8
            text-sm
            sm:text-lg
            md:text-xl
            max-w-4xl
            mx-auto
            leading-7
            sm:leading-9
          ">
            We'd love to hear from you. Whether you're
            looking for AI Solutions, Cloud Services,
            Enterprise Software, PLM, ERP or Digital
            Transformation, our experts are ready to
            help your business accelerate innovation.
          </p>

        </motion.div>


        {/* =====================================================
            CONTACT CARDS
        ===================================================== */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          sm:gap-8
          mt-12
          sm:mt-20
        ">

          {[
            {
              icon: <FaMapMarkerAlt size={26} />,
              title: "Office",
              value: "Pune, Maharashtra, India",
            },
            {
              icon: <FaEnvelope size={26} />,
              title: "Email",
              value: "info@ditrinity.com",
            },
            {
              icon: <FaPhoneAlt size={26} />,
              title: "Phone",
              value: "+91 XXXXX XXXXX",
            },
            {
              icon: <FaClock size={26} />,
              title: "Working Hours",
              value: "Mon - Fri | 9:00 AM - 6:00 PM",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                bg-[#111827]
                rounded-3xl
                border
                border-gray-700
                hover:border-cyan-400
                hover:shadow-[0_20px_60px_rgba(34,211,238,.20)]
                p-6
                sm:p-8
                duration-500
                text-center
              "
            >

              <div className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                bg-cyan-500
                mx-auto
                flex
                items-center
                justify-center
                text-white
                group-hover:rotate-12
                duration-500
              ">
                {item.icon}
              </div>

              <h2 className="
                text-white
                text-xl
                sm:text-2xl
                font-bold
                mt-5
                sm:mt-6
              ">
                {item.title}
              </h2>

              <p className="
                text-gray-400
                mt-4
                sm:mt-5
                leading-7
                text-sm
                sm:text-base
                break-words
              ">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>


        {/* =====================================================
            CONTACT FORM + MAP
        ===================================================== */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          sm:gap-12
          mt-16
          sm:mt-24
        ">

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              bg-[#111827]
              border
              border-gray-700
              hover:border-cyan-400
              rounded-3xl
              p-5
              sm:p-8
              md:p-10
              transition-all
              duration-500
            "
          >

            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              mb-6
              sm:mb-8
            ">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >

              {/* Name */}

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                "
              />


              {/* Email */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                "
              />


              {/* Phone */}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                "
              />


              {/* Company */}

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                "
              />


              {/* Subject */}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                "
              />


              {/* Message */}

              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#1F2937]
                  border
                  border-gray-600
                  rounded-xl
                  p-3.5
                  sm:p-4
                  text-white
                  placeholder-gray-500
                  focus:border-cyan-400
                  outline-none
                  duration-300
                  resize-none
                "
              />


              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  active:bg-cyan-700
                  text-white
                  font-bold
                  py-3.5
                  sm:py-4
                  rounded-xl
                  hover:scale-[1.01]
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </motion.div>


          {/* =================================================
              GOOGLE MAP
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              bg-[#111827]
              border
              border-gray-700
              hover:border-cyan-400
              rounded-3xl
              p-4
              sm:p-5
              transition-all
              duration-500
            "
          >

            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              mb-5
              sm:mb-6
            ">
              Find Us
            </h2>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
              loading="lazy"
              className="
                w-full
                h-[350px]
                sm:h-[450px]
                lg:h-[600px]
                rounded-2xl
                border-0
              "
            ></iframe>

          </motion.div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 sm:mt-24"
        >

          <div className="
            bg-gradient-to-r
            from-cyan-600
            to-blue-700
            rounded-3xl
            p-7
            sm:p-10
            md:p-14
            text-center
          ">

            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-white
            ">
              Let's Build Something Amazing Together
            </h2>

            <p className="
              text-white
              text-sm
              sm:text-lg
              mt-5
              sm:mt-8
              max-w-4xl
              mx-auto
              leading-7
              sm:leading-8
            ">
              Whether you're planning a new software
              product, modernizing enterprise applications,
              implementing AI solutions or migrating to
              the cloud, our experts are ready to help you
              at every stage.
            </p>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="
                mt-7
                sm:mt-10
                bg-white
                text-cyan-700
                px-7
                sm:px-10
                py-3.5
                sm:py-4
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