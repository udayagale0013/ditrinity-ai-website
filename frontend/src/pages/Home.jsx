import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import WhyChoose from "../components/home/WhyChoose";
import ContactCTA from "../components/home/ContactCTA";
import ChatBot from "../components/chatbot/ChatBot";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyChoose />
      <Testimonials />
      <ContactCTA />
      <ChatBot />
    </>
  );
}

export default Home;