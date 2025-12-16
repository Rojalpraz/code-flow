import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Price from "./Components/Price";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import { useEffect } from "react";


function App() {
    useEffect(() => {
    
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return (
  
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden ">
        <Navbar />
        <Hero/>
        <Feature />
        <Price />
        <Testimonials />
         <Footer />
      </div>
   
  );
}

export default App;
