import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Automotive & Suppliers",
    country: "Germany, France, Spain, Sweden, UK, USA, Japan, India",
    service: "PLM Services",
    image: 
"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop",
  },
  {
    title: "Electric Vehicle",
    country: "Sweden, India",
    service: "PLM Services",
    image:
"https://images.unsplash.com/photo-1553260168-69b041873e65?w=900&auto=format&fit=crop",
  },
  {
    title: "Transportation",
    country: "USA, France, Germany, Italy, India",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=900",
  },
  {
    title: "Aerospace, Marine & Defense",
    country: "UK, Spain, Germany, USA",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900",
  },
  {
    title: "Additive Manufacturing",
    country: "USA, UK",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900",
  },
  {
    title: "Diversified Manufacturing",
    country: "Sweden, Germany, Denmark, Switzerland, Belgium, USA, Japan",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900",
  },
  {
    title: "Wind Power & Energy",
    country: "Denmark, Netherlands, Switzerland, Spain, USA",
    service: "PLM & IoT Services",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900",
  },
  {
    title: "IT & Software",
    country: "Germany, Netherlands, USA",
    service: "PLM & IoT Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
  },
  {
    title: "Electronics & Semiconductor",
    country: "Netherlands",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
  },
  {
    title: "Telecom",
    country: "Sweden",
    service: "PLM Services",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
  {
    title: "Consumer Goods",
    country: "UK, USA",
    service: "PLM & IoT Services",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900",
  },
];
function Industries() {
  return (

    <section className="bg-[#0F172A] min-h-screen py-24">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <h1 className="text-5xl font-bold text-white">
            Clientele Across
            <span className="text-cyan-400"> The Globe</span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-4xl mx-auto leading-8">
            diTrinity Technologies has successfully delivered
            Digital Engineering, PLM, Cloud, IoT and Enterprise
            Software Solutions for customers across Automotive,
            Aerospace, Manufacturing, Telecom, Energy and
            Consumer Industries worldwide.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {industries.map((industry,index)=>(

          <motion.div
            key={index}
            initial={{opacity:0,y:60}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{
              duration:.6,
              delay:index*.08
            }}
            whileHover={{
              y:-12,
              scale:1.03
            }}
            className="
            group
            bg-[#111827]
            rounded-3xl
            overflow-hidden
            border
            border-gray-700
            hover:border-cyan-400
            hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
            duration-500
            "
          >

            <img
              src={industry.image}
              alt={industry.title}
              className="
              w-full
              h-56
              object-cover
              group-hover:scale-110
              duration-700
              "
            />

            <div className="p-7">

              <h2 className="text-2xl font-bold text-white">
                {industry.title}
              </h2>
                            <p className="text-gray-400 mt-5 leading-7">

                <span className="text-cyan-400 font-semibold">
                  Countries
                </span>

                <br />

                {industry.country}

              </p>

              <div className="mt-6">

                <span
                  className="
                  inline-block
                  bg-cyan-500/20
                  text-cyan-300
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                  text-sm
                  "
                >
                  {industry.service}
                </span>

              </div>

            </div>

          </motion.div>

          ))}

        </div>

        <motion.div
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.8}}
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
              Global Industry Expertise
            </h2>

            <p className="text-white mt-6 text-lg max-w-4xl mx-auto leading-8">
              diTrinity Technologies has successfully delivered
              PLM, Cloud, IoT and Enterprise Engineering
              Solutions across Europe, USA, Japan and India,
              helping organizations accelerate digital
              transformation.
            </p>

            <Link
              to="/contact"
              className="
              inline-block
              mt-8
              bg-white
              text-cyan-700
              font-bold
              px-8
              py-4
              rounded-xl
              hover:bg-gray-200
              duration-300
              "
            >
              Contact Our Experts
            </Link>

          </div>

        </motion.div>
              </div>

    </section>

  );
}

export default Industries;