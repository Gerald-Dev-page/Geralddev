import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Products from "./components/Products"; // El nuevo componente para tus SaaS/Demos
import Testimonial from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
        {/* Fondo animado en toda la pantalla */}
        {/*<BeamsBackground className="fixed inset-0 -z-10" />*/}

        {/* Contenido de la página */}
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Products /> 
        <Testimonial />
        <Contact />
        <Footer />
        <WhatsAppFab
          phone="5492664952528"
          message="¡Hola! Vengo desde la web y quiero consultar por un proyecto 🙂"
        />
      </div>
    </>
  );
}

export default App;