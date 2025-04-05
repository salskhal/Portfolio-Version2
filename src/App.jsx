// import { useEffect, useState } from "react";
// import { motion as m } from "framer-motion";
// import Navbar from "./components/Header/Navbar";
// import Home from "./components/Home";

// import Experience from "./components/Experience/Experience";
// import Project from "./components/Projects/Project";
// import Footer from "./components/Footer";
// import Preloader from "./components/Preloader/Preloader";
// import CTA from "./components/CTA";
// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   if (isLoading) {
//     return <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />;
//   }

//   return (
//     <m.div
//       className="min-h-screen bg-[#111827]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <Navbar />
//       <Home />
//       <Experience />
//       <Project />
//       <CTA />
//       <Footer />
//     </m.div>
//   );
// }


import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader/Preloader";
import CTA from "./components/CTA";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure minimum display time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <motion.div
            key="main-content"
            className="min-h-screen bg-[#0B1121]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Home />
            <Experience />
            <Project />
            <CTA />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// import Hero from "./components/Hero";
// import ExperienceTimeline from "./components/Experience/ExperienceTime";
{
  /* <Hero /> */
}
{
  /* <ExperienceTimeline /> */
}
