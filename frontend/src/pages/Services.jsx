import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";

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

<>

<section className="bg-gradient-to-b from-slate-950 via-slate-900 to-black py-28">

<div className="max-w-7xl mx-auto px-8">


<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="text-center"
>

<h1 className="text-6xl font-bold text-white">
Cloud Services
</h1>


<p className="text-cyan-400 text-2xl mt-8 font-semibold">
Infrastructure that scales with your ambition
</p>


<p className="text-gray-300 mt-8 text-xl max-w-5xl mx-auto leading-9">

diTrinity Technologies Pvt. Ltd. architects, deploys and manages
enterprise cloud environments on AWS and Azure so your engineering
team can focus on building products instead of managing servers.

</p>


</motion.div>



{/* Earth Image */}

<motion.div

initial={{opacity:0,scale:.95}}
whileInView={{opacity:1,scale:1}}
transition={{duration:.8}}
viewport={{once:true}}

className="
mt-16
max-w-5xl
mx-auto
overflow-hidden
rounded-3xl
shadow-2xl
"

>


<img

src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600"

className="
w-full
h-[320px]
object-cover
hover:scale-105
duration-700
"

/>


</motion.div>



{/* End To End */}

<div className="text-center mt-12">


<h2 className="text-5xl font-bold text-white">

End-to-End Cloud Services

</h2>


<p className="text-gray-300 text-xl leading-9 max-w-5xl mx-auto mt-6">

We provide innovative cloud solutions for businesses of every
size, delivering secure, scalable and high-performance cloud
environments with precision.

</p>


</div>




<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">


{services.map((item,index)=>(


<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{
duration:.6,
delay:index*.1
}}

viewport={{once:true}}

whileHover={{
y:-15,
scale:1.03,
rotateX:2
}}

className="
group
bg-slate-900/80
backdrop-blur-lg
rounded-3xl
overflow-hidden
border
border-slate-700
hover:border-cyan-400
shadow-2xl
duration-500
"


>


<div className="overflow-hidden">


<img

src={item.image}

alt={item.title}

className="
w-full
h-60
object-cover
group-hover:scale-110
duration-700
"

/>


</div>



<div className="p-7">


<h3 className="text-2xl font-bold text-white mb-5">

{item.title}

</h3>



<p className="text-gray-300 leading-8">

{item.desc}

</p>


</div>


</motion.div>


))}


</div>
{/* Why Choose Section */}

<div className="mt-28 rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">


<div className="grid lg:grid-cols-2 items-center">


<div className="p-12">


<h2 className="text-5xl font-bold text-white leading-tight">

Why Choose

<span className="text-cyan-400">
 diTrinity Cloud?
</span>

</h2>



<p className="text-gray-300 mt-8 text-lg leading-9">

From architecture to migration, DevOps, monitoring,
disaster recovery and managed operations — we become
your long-term cloud transformation partner.

</p>



<div className="grid grid-cols-2 gap-5 mt-10">


<div className="
bg-slate-800
rounded-2xl
p-6
hover:bg-cyan-500
duration-300
hover:text-black
cursor-pointer
">

<h3 className="font-bold text-xl">
AWS
</h3>

<p className="mt-2">
Well Architected Framework
</p>

</div>



<div className="
bg-slate-800
rounded-2xl
p-6
hover:bg-cyan-500
duration-300
hover:text-black
cursor-pointer
">

<h3 className="font-bold text-xl">
Azure
</h3>

<p className="mt-2">
Azure CAF Solutions
</p>

</div>




<div className="
bg-slate-800
rounded-2xl
p-6
hover:bg-cyan-500
duration-300
hover:text-black
cursor-pointer
">

<h3 className="font-bold text-xl">
Kubernetes
</h3>

<p className="mt-2">
Container Platform
</p>

</div>




<div className="
bg-slate-800
rounded-2xl
p-6
hover:bg-cyan-500
duration-300
hover:text-black
cursor-pointer
">

<h3 className="font-bold text-xl">
DevOps
</h3>

<p className="mt-2">
CI/CD Automation
</p>

</div>



</div>


</div>




{/* Changed Wire Image */}

<img

src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400"

className="
h-full
w-full
object-cover
hover:scale-105
duration-700
"

/>



</div>


</div>



</div>


</section>





{/* CTA Section */}


<section className="bg-slate-950 py-24">


<div className="max-w-7xl mx-auto px-8">



<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

className="
bg-gradient-to-r
from-cyan-600
to-blue-700
rounded-3xl
p-14
text-center
shadow-2xl
"

>


<h2 className="text-5xl font-bold text-white">

Ready to Move Your Business to the Cloud?

</h2>



<p className="
text-xl
text-gray-100
mt-8
max-w-3xl
mx-auto
leading-9
">

Whether you're planning a cloud migration,
modernizing your infrastructure, or optimizing
existing workloads, diTrinity Technologies
delivers secure, scalable and future-ready
cloud solutions.

</p>



<button

className="
mt-10
bg-white
text-slate-900
px-10
py-4
rounded-xl
font-bold
text-lg
hover:scale-105
hover:shadow-2xl
duration-300
"

>

Talk To Our Cloud Experts

</button>



</motion.div>


</div>


</section>



<Footer />


</>

);

}


export default Services;