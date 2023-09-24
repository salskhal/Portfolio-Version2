import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader/Preloader";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />;
  }

  return (
    <m.div
      className="min-h-screen bg-[#111827]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <Home />
      <Hero />
      <Experience />
      <Project />
      <Footer />
    </m.div>
  );
}
