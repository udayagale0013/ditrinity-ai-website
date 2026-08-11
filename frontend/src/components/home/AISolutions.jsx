import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Consulting",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    points: [
      "Product Evaluation & Roadmap",
      "Design & Architecture",
      "Expert Review and Systems Analysis",
    ],
  },

  {
    title: "Implementation",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    points: [
      "Development",
      "Configuration & Customization",
      "Deployment",
      "Systems Upgrade",
      "Data Migration",
      "Enterprise Integration",
    ],
  },

  {
    title: "Enablement",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    points: [
      "Training",
      "Application Automation",
      "Application Maintenance",
      "Test Automation",
      "Support",
    ],
  },
];

const capabilities = [
  {
    title: "PLM",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    desc:
      "Teamcenter UA, Active Workspace, Mendix, Polarion, TC Enterprise, 3DEXPERIENCE ENOVIA, Windchill PLM and ARAS PLM solutions.",
  },

  {
    title: "ERP",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    desc:
      "SAP FI, CO, SD, MM, HCM, SAP HANA, Oracle Applications and ABAP enterprise development.",
  },

  {
    title: "Design & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    desc:
      "NX, Tecnomatix, CATIA, DELMIA, SolidWorks and Creo engineering solutions.",
  },

  {
    title: "Mobile & Web",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    desc:
      "Android, iOS, Java, .NET, Linux and PHP based enterprise web applications.",
  },

  {
    title: "AI Services",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    desc:
      "Machine Learning, Natural Language Processing, Computer Vision and Generative AI solutions.",
  },

  {
    title: "IoT Services",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    desc:
      "Connected devices, industrial IoT platforms and real-time monitoring systems.",
  },
];

function AISolutions() {
  return (
    <section className="bg-slate-950 min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-8">

        {/* ================= HERO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Digital Solutions
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-6 leading-9">
            diTrinity Technologies delivers end-to-end Digital Solutions
            through Consulting, Implementation and Enablement services,
            helping organizations accelerate digital transformation with
            scalable enterprise technologies.
          </p>
        </motion.div>

        {/* ================= SERVICES ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border
                border-slate-700
                hover:border-cyan-400
                hover:-translate-y-3
                duration-500
                shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    hover:scale-110
                    duration-700
                  "
                />
              </div>

              <div className="p-8">

                <h2 className="text-3xl font-bold text-white mb-6">
                  {item.title}
                </h2>

                <ul className="space-y-4">

                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="
                        text-gray-300
                        text-lg
                        flex
                        items-start
                      "
                    >
                      <span className="text-cyan-400 mr-3">
                        ✔
                      </span>

                      {point}
                    </li>
                  ))}

                </ul>

              </div>
            </motion.div>
          ))}

        </div>

        {/* ================= SKILLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Skills & Capabilities
          </h2>

          <p className="text-gray-300 mt-5 text-xl max-w-3xl mx-auto">
            Expertise across enterprise platforms, engineering software,
            AI, IoT and Digital Engineering technologies.
          </p>
        </motion.div>

        {/* ================= CAPABILITIES ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border
                border-slate-700
                hover:border-cyan-400
                hover:-translate-y-3
                duration-500
                shadow-xl
              "
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    hover:scale-110
                    duration-700
                  "
                />
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-8">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >

          <div
            className="
              bg-gradient-to-r
              from-cyan-600
              to-blue-700
              rounded-3xl
              p-12
              md:p-14
              text-center
              shadow-2xl
            "
          >

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Accelerate Your Digital Transformation
            </h2>

            <p className="text-xl text-gray-100 mt-6 max-w-3xl mx-auto leading-9">
              From enterprise consulting to implementation and ongoing
              support, diTrinity Technologies helps organizations build
              modern digital platforms that improve productivity,
              streamline operations and drive business growth.
            </p>

            {/* TALK TO OUR EXPERTS */}

            <Link
              to="/contact"
              className="
                inline-block
                mt-8
                bg-white
                text-slate-900
                px-10
                py-4
                rounded-xl
                font-bold
                text-lg
                hover:scale-105
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              Talk To Our Experts
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AISolutions;