// import sharehub from "../../assets/sharehub.png";
// import unify from "../../assets/unify.png";
// import moviebox from "../../assets/moviebox.png";
// import solarsystem from "../../assets/solarsystem.png";
// import lifeBlog from "../../assets/LifeBlog.png";
// import digitalResume from  "../../assets/digitalResume.png"

// const projectsData = [
//   {
//     title: "ShareHub",
//     image: sharehub,
//     tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
//     visit: "https://sharehub1.vercel.app/",
//     id: 0,
//   },
//   {
//     title: "Unify",
//     image: unify,
//     tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
//     visit: "https://unify-three.vercel.app/",
//     id: 1,
//   },
//   {
//     title: "MovieBox",
//     image: moviebox,
//     tags: ["React", "JavaScript", "Rest API"],
//     visit: "https://movieboxxx.vercel.app/",
//     id: 2,
//   },
//   {
//     title: "Solar System",
//     image: solarsystem,
//     tags: ["Vue", "JavaScript", "JSON", "CSS-Animation"],
//     visit: "https://solarsys.vercel.app/",
//     id: 3,
//   },
//   {
//     title: "Life and Living Blog",
//     image: lifeBlog,
//     tags: ["Vue", "JavaScript", "Tailwind"],
//     visit: "https://life-and-living.vercel.app/",
//     id: 4,
//   },
//   {
//     title: "Digital Resume",
//     image: digitalResume,
//     tags: ["Vue", "JavaScript", "Tailwind"],
//     visit: "https://sals-digit.netlify.app/",
//     id: 5,
//   }
// ];

// export default function Project() {
//   return (
//     <div className="px-10 pb-10 py-24 md:px-32 min-h-screen" id="projects">
//       <h1 className=" text-4xl font-bold text-white my-10">
//         Featured{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//           Projects
//         </span>
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projectsData.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#172135] rounded-xl shadow-xl overflow-hidden"
//           >
//             <img src={project.image} alt={project.title} />
//             <div className="p-4">
//               <h1 className="text-2xl font-semibold text-white">
//                 {project.title}
//               </h1>

//               <a
//                 href={project.visit}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-4 "
//               >
                
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   stroke="#fff"
//                   d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
//                 />
//               </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { motion } from "framer-motion";
// import sharehub from "../../assets/sharehub.png";
// import unify from "../../assets/unify.png";
// import moviebox from "../../assets/moviebox.png";
// import solarsystem from "../../assets/solarsystem.png";
// import lifeBlog from "../../assets/LifeBlog.png";
// import digitalResume from "../../assets/digitalResume.png";
// import { FiExternalLink } from "react-icons/fi";

// const projectsData = [
//   {
//     title: "ShareHub",
//     description: "A platform for sharing resources and collaborating with others",
//     image: sharehub,
//     tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
//     visit: "https://sharehub1.vercel.app/",
//     id: 0,
//   },
//   {
//     title: "Unify",
//     description: "A unified dashboard for managing all your applications",
//     image: unify,
//     tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
//     visit: "https://unify-three.vercel.app/",
//     id: 1,
//   },
//   {
//     title: "MovieBox",
//     description: "Discover and explore movies with detailed information",
//     image: moviebox,
//     tags: ["React", "JavaScript", "Rest API"],
//     visit: "https://movieboxxx.vercel.app/",
//     id: 2,
//   },
//   {
//     title: "Solar System",
//     description: "Interactive exploration of our solar system",
//     image: solarsystem,
//     tags: ["Vue", "JavaScript", "JSON", "CSS-Animation"],
//     visit: "https://solarsys.vercel.app/",
//     id: 3,
//   },
//   {
//     title: "Life and Living Blog",
//     description: "A lifestyle blog with modern design and content management",
//     image: lifeBlog,
//     tags: ["Vue", "JavaScript", "Tailwind"],
//     visit: "https://life-and-living.vercel.app/",
//     id: 4,
//   },
//   {
//     title: "Digital Resume",
//     description: "Interactive digital resume showcasing skills and experience",
//     image: digitalResume,
//     tags: ["Vue", "JavaScript", "Tailwind"],
//     visit: "https://sals-digit.netlify.app/",
//     id: 5,
//   },
// ];

// export default function Project() {
//   return (
//     <section className="px-6 md:px-16 lg:px-32 py-24 bg-[#0B1121]" id="projects">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-4xl font-semibold text-white relative">
//             <span className="relative">
//               Featured{" "}
//               <span className="text-[#7127BA]">Projects</span>
//               <motion.span
//                 className="absolute -bottom-2 left-0 h-1 bg-[#7127BA]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>
          
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectsData.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-[#172135] rounded-xl overflow-hidden shadow-xl shadow-[#0B1121]/50 group"
//             >
//               <div className="relative overflow-hidden h-52">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-[#7127BA]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <motion.a
//                     href={project.visit}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="bg-white text-[#7127BA] p-3 rounded-full mx-2 hover:bg-[#172135] hover:text-white transition-colors duration-300"
//                   >
//                     <FiExternalLink size={20} />
//                   </motion.a>
                  
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 text-xs rounded-md bg-[#0B1121]/60 text-[#7127BA] font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


import unify from "../../assets/unify.png";
import solarsystem from "../../assets/solarsystem.png";
import lifeBlog from "../../assets/LifeBlog.png";
import digitalResume from "../../assets/digitalResume.png";
import afroPandaEsport from "../../assets/portfolio/afropanda.png"
import cguardblockchain from "../../assets/portfolio/cguard.png"
import icareNeuroAndSpine from "../../assets/portfolio/icare.png"

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const projectsData = [
  {
    title: "AfroPanda Esport",
    description: "A platform for esports enthusiasts to connect and compete",
    image: afroPandaEsport,
    tags: ["React", "JavaScript", "Tailwind"],
    visit: "https://www.afropandaesports.com",
    id: 0,
  },
  {
    title: "Unify",
    description: "Landing page for a digitized education platform",
    image: unify,
    tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
    visit: "https://unify-three.vercel.app/",
    id: 1,
  },
  {
    title: "CGuard",
    description: "Revolutionizing crypto lending with a user-friendly, secure, and overcollateralized protocol",
    image: cguardblockchain,
    tags: ["React", "JavaScript", "Tailwind"],
    visit: "https://www.cguardprotocol.com/",
    id: 2,
  },
  {
    title: "Solar System",
    description: "Interactive exploration of our solar system",
    image: solarsystem,
    tags: ["Vue", "JavaScript", "JSON", "CSS-Animation"],
    visit: "https://solarsys.vercel.app/",
    id: 3,
  },
  {
    title: "Life and Living Blog",
    description: "A lifestyle blog with modern design and content management",
    image: lifeBlog,
    tags: ["Vue", "JavaScript", "Tailwind"],
    visit: "https://life-and-living.vercel.app/",
    id: 4,
  },
  {
    title: "Digital Resume",
    description: "Interactive digital resume showcasing skills and experience",
    image: digitalResume,
    tags: ["Vue", "JavaScript", "Tailwind"],
    visit: "https://sals-digit.netlify.app/",
    id: 5,
  },
  {
    title: "iCare Neuro and Spine",
    description: "A healthcare platform for neuro and spine care",
    image: icareNeuroAndSpine,
    tags: ["React", "JavaScript", "Tailwind"],
    visit: "https://icareclinic.vercel.app/",
    id: 6,
  },
];

export default function Project() {
  const [activeProject, setActiveProject] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  
  const navigateCarousel = (direction) => {
    setActiveProject(prev => {
      const newIndex = direction === 'next' 
        ? (prev + 1) % projectsData.length 
        : (prev - 1 + projectsData.length) % projectsData.length;
      return newIndex;
    });
  };

  return (
    <section 
      className="px-6 md:px-16 lg:px-32 py-24 bg-[#0B1121] relative overflow-hidden" 
      id="projects"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute w-96 h-96 rounded-full bg-[#7127BA]/10 blur-3xl -top-48 -right-48" />
      <div className="absolute w-80 h-80 rounded-full bg-[#7127BA]/10 blur-3xl -bottom-40 -left-40" />
      
      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">
            <span className="relative">
              Featured{" "}
              <span className="text-[#7127BA]">Projects</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-[#7127BA]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateCarousel('prev')}
              className="bg-[#172135] text-white p-3 rounded-full hover:bg-[#7127BA] transition-colors duration-300"
              aria-label="Previous project"
            >
              <FiArrowLeft size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateCarousel('next')}
              className="bg-[#172135] text-white p-3 rounded-full hover:bg-[#7127BA] transition-colors duration-300"
              aria-label="Next project"
            >
              <FiArrowRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-xl overflow-hidden h-64 md:h-96 group">
              <motion.img 
                src={projectsData[activeProject].image} 
                alt={projectsData[activeProject].title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/30 to-transparent opacity-70" />
            </div>
            
            <div>
              <motion.span 
                className="inline-block px-3 py-1 rounded-full bg-[#7127BA]/20 text-[#7127BA] text-sm font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Featured Project
              </motion.span>
              
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {projectsData[activeProject].title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {projectsData[activeProject].description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {projectsData[activeProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-[#172135] text-white text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={projectsData[activeProject].visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7127BA] hover:bg-[#8A3CD6] text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                >
                  View Project <FiArrowRight />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Project Carousel */}
        <div className="relative" ref={carouselRef}>
          <div className="flex overflow-x-auto scrollbar-hide pb-8 space-x-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 w-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeProject === index 
                    ? 'ring-2 ring-[#7127BA] shadow-lg shadow-[#7127BA]/20 scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-36">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] to-transparent opacity-60" />
                </div>
                
                <div className="p-4 bg-[#172135]">
                  <h4 className="text-white font-medium truncate">{project.title}</h4>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-[#0B1121]/60 text-[#7127BA]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-[#0B1121]/60 text-gray-400">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Progress indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-[#7127BA] w-6' 
                    : 'bg-[#172135] hover:bg-[#7127BA]/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}