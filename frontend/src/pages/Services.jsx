import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Cloud Architecture & Design",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    desc:
      "We design scalable, fault-tolerant architectures using AWS Well-Architected and Azure CAF frameworks built around your workload.",
  },
  {
    title: "Cloud Migration",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    desc:
      "Lift-and-shift, re-platform or re-architect with zero surprise downtime using a phased migration strategy.",
  },
  {
    title: "DevOps & CI/CD",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200",
    desc:
      "Terraform, GitOps, Jenkins, Kubernetes, Infrastructure as Code and automated CI/CD pipelines.",
  },
  {
    title: "Security & Compliance",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
    desc:
      "IAM Hardening, Network Segmentation, SIEM Integration and SOC2, HIPAA, PCI-DSS & ISO27001 compliance.",
  },
  {
    title: "Observability & Monitoring",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    desc:
      "CloudWatch, Azure Monitor, OpenTelemetry dashboards and intelligent monitoring.",
  },
  {
    title: "FinOps & Cost Optimization",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    desc:
      "Reserved Instance Analysis, Savings Plans, Rightsizing Reports and Cloud Cost Optimization.",
  },
  {
    title: "Disaster Recovery",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    desc:
      "Multi-region Failover, Backup Strategy, RTO/RPO Planning and Disaster Recovery testing.",
  },
  {
    title: "Managed Cloud Operations",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200",
    desc:
      "24×7 NOC Support, Patch Management, Capacity Planning and Dedicated Cloud Engineers.",
  },
];

function Services() {
  return (
    <section className="bg-[#0F172A] min-h-screen pt-8 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg leading-8 max-w-4xl mx-auto">
            diTrinity Technologies Pvt. Ltd. architects, deploys and manages
            enterprise cloud environments on AWS and Azure so your engineering
            team can focus on building products instead of managing servers.
          </p>
        </motion.div>

        {/* Earth Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600"
            alt="Cloud Technology"
            className="w-full h-[320px] object-cover hover:scale-105 duration-700"
          />
        </motion.div>

        {/* End To End */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-white">
            End-to-End Cloud Services
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
            We provide innovative cloud solutions for businesses of every
            size, delivering secure, scalable and high-performance cloud
            environments with precision.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateX: 2,
              }}
              className="group bg-slate-900/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 shadow-2xl duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 duration-700"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-white">
            Why Choose
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
            From architecture to migration, DevOps, monitoring,
            disaster recovery and managed operations — we become
            your long-term cloud transformation partner.
          </p>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-14 text-center shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white">
            Ready to Move Your Business to the Cloud?
          </h2>

          <p className="text-white/90 mt-6 max-w-3xl mx-auto leading-8">
            Whether you're planning a cloud migration,
            modernizing your infrastructure, or optimizing
            existing workloads, diTrinity Technologies
            delivers secure, scalable and future-ready
            cloud solutions.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl duration-300"
          >
            Talk To Our Cloud Experts
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;