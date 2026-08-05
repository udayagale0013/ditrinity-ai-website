import { motion } from "framer-motion";
import Footer from "../layout/Footer";

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
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    desc:
      "Teamcenter UA, Active Workspace, Mendix, Polarion, TC Enterprise, 3DExperience Enovia, Windchill PLM and ARAS PLM.",
  },

  {
    title: "ERP",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
    desc:
      "SAP FI, CO, SD, MM, HCM, SAP HANA, Oracle Apps and ABAP Development.",
  },

  {
    title: "Design & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    desc:
      "NX, Tecnomatix, CATIA, DELMIA, Solidworks, Creo Toolkit.",
  },

  {
    title: "Mobile & Web",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    desc:
      "Android, iOS, Java, .NET, Linux and PHP Enterprise Applications.",
  },

  

  {
    title: "AI Services",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    desc:
      "Machine Learning, NLP, Computer Vision and Generative AI.",
  },

  {
    title: "IoT Services",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    desc:
      "Connected Device Ecosystems with Real-Time Monitoring.",
  },
];

function AISolutions() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black py-28">

        <div className="max-w-7xl mx-auto px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <h1 className="text-6xl font-bold text-white">
              Digital Solutions
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto mt-8 leading-9">
              diTrinity Technologies delivers end-to-end Digital Solutions
              through Consulting, Implementation and Enablement services.
              We help enterprises modernize operations and accelerate
              digital transformation.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {services.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 duration-500 shadow-2xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-110 duration-700"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold text-white mb-6">
                  {item.title}
                </h2>

                <ul className="space-y-4">

                  {item.points.map((point, i) => (

                    <li
                      key={i}
                      className="text-gray-300 text-lg flex items-start"
                    >
                      <span className="text-cyan-400 mr-3">✔</span>
                      {point}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

          </div>

          <div className="mt-28 text-center">

            <h2 className="text-5xl font-bold text-white">
              Skills & Capabilities
            </h2>

            <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
              Expertise across enterprise platforms, engineering software,
              AI, IoT and Digital Engineering technologies.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {capabilities.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: index * .1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-3 duration-500 shadow-xl"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

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
          </div>

      </section>

      <Footer />
    </>
  );
}

export default AISolutions;