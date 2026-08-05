import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import HealthcareSolutions from "./pages/Technologies";
import Industries from "./pages/Industries";
import AISolutions from "./pages/AISolutions";
import Apply from "./pages/Apply";


function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/ai-solutions" element={<AISolutions />} />

        <Route 
          path="/technologies" 
          element={<HealthcareSolutions />} 
        />

        <Route path="/industries" element={<Industries />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />

        <Route 
          path="/apply/:jobTitle" 
          element={<Apply />} 
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;