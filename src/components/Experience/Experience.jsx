// const workdata = [
//   {
//     id: 1,
//     title: "Campus Ambassador",
//     company: "Cowrywise - Lagos",
//     date: "June 2023 - Present",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
//   },
//   {
//     id: 2,
//     title: "Software Engineer Intern",
//     company: "AXA Mansard - Lagos",
//     date: "May 2023 - Present",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
//   },
//   {
//     id: 3,
//     title: "Frontend Developer",
//     company: "Unify - Ilorin",
//     date: "May 2022 - August 2022",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
//   },
//   {
//     id: 4,
//     title: "Frontend Developer",
//     company: "CodeCraft - Ilorin",
//     date: "October 2021 - July 2022",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
//   },
// ];

// export default function Experience() {
//   return (
//     <div
//       className="px-10 py-10 md:px-32 min-h-screen mt-10 gap-5 flex flex-col "
//       id="experience"
//     >
//       <h3 className="text-4xl font-bold text-white my-10">Work Experience</h3>
//       <div
//         className="
//       grid grid-cols-1 md:grid-cols-2 gap-10
//       "
//       >
//         {workdata.map((work) => {
//           return (
//             <div
//               className="flex flex-col space-y-5 
//             bg-[#172135] p-5 rounded-xl border-t-4 border-[#7127BA]
//             "
//               key={work.id}
//             >
//               <h3 className="text-3xl font-bold text-white">{work.title}</h3>
//               <h4 className="text-xl font-semibold text-gray-300">
//                 {work.company}
//               </h4>
//               <h5 className="text- font-semibold text-gray-500">
//                 {work.date}
//               </h5>
//               {/* <p className="text-white">{work.desc}</p> */}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaBuilding,  } from "react-icons/fa";

// Updated work experience data
const workData = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "CINNSOL",
    location: "Remote",
    date: "February 2025 - Present",
    current: false,
    desc: "Worked as a Frontend Engineer, building responsive and accessible web applications.",
    skills: ["Vue.js", "TypeScript", "Nuxt.js", "Tailwind CSS"],
    highlights: [
      "Developing responsive web interfaces using Nuxt.js and TypeScript",
      "Implementing modern frontend architecture and best practices",
      "Collaborating with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Unleashified",
    location: "Remote",
    date: "January 2025 - Present",
    current: false,
    desc: "Developing modern web interfaces and implementing responsive designs for various client projects.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design"],
    highlights: [
      "Building client-facing applications with focus on performance and user experience",
      "Creating reusable component libraries to improve development efficiency",
      "Working closely with design teams to implement pixel-perfect interfaces"
    ]
  },
  {
    id: 3,
    title: "Freelance Frontend Developer",
    company: "Afropanda",
    location: "Remote",
    date: "November 2024 - December 2024",
    current: false,
    desc: "Redesigned and developed a modern, responsive website, enhancing user experience and increasing visitor retention.",
    skills: ["React", "Next.js", "Performance Optimization", "UX/UI"],
    highlights: [
      "Improved website performance, achieving faster load times and seamless navigation",
      "Collaborated with stakeholders to implement a design that aligned with the brand's identity",
      "Leveraged modern web development technologies to ensure cross-browser compatibility"
    ]
  },
  {
    id: 5,
    title: "Software Engineer Intern",
    company: "AXA Mansard",
    location: "Lagos",
    date: "May 2023 - Present",
    current: false,
    desc: "Working on developing and maintaining web applications, focusing on frontend technologies.",
    skills: ["React", "JavaScript", "Git", "Agile"],
    highlights: [
      "Participated in agile development processes and sprint planning",
      "Developed and maintained frontend components for insurance products",
      "Collaborated with senior engineers on improving application performance"
    ]
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Unify",
    location: "Ilorin",
    date: "May 2022 - August 2022",
    current: false,
    desc: "Developed user interfaces and implemented responsive designs for web applications.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Created responsive web interfaces for multiple client projects",
      "Implemented UI components based on design specifications",
      "Worked with the team to ensure consistent design patterns"
    ]
  },
  {
    id: 7,
    title: "Frontend Developer",
    company: "CodeCraft",
    location: "Ilorin",
    date: "October 2021 - July 2022",
    current: false,
    desc: "Created clean, efficient code based on specifications and implemented responsive designs.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
    highlights: [
      "Built and maintained client websites with focus on accessibility",
      "Collaborated with backend developers to integrate frontend with APIs",
      "Participated in code reviews and implemented feedback"
    ]
  },
];

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(1);
  
  return (
    <div className="px-6 md:px-16 lg:px-32 py-24 bg-[#0F172A] relative" id="experience">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#7127BA] filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#7127BA] filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-16"
        >
          <FaBriefcase className="text-[#7127BA] text-4xl mr-4" />
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
          <motion.div 
            className="h-[2px] bg-gradient-to-r from-[#7127BA] to-transparent flex-grow ml-6"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab navigation - vertical on larger screens */}
          <motion.div 
            className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible hide-scrollbar"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {workData.map((job) => (
              <button
                key={job.id}
                onClick={() => setActiveTabId(job.id)}
                className={`text-left py-4 px-6 min-w-[180px] lg:min-w-0 border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 ${
                  activeTabId === job.id 
                    ? "text-[#7127BA] border-[#7127BA] bg-[#172135] font-medium"
                    : "text-gray-400 border-gray-700 hover:text-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="lg:flex lg:items-center">
                  <span className="block whitespace-nowrap">{job.company}</span>
                  <div className="hidden lg:block text-xs ml-2">
                    {job.current && (
                      <span className="px-2 py-0.5 bg-[#7127BA]/20 text-[#7127BA] rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
          
          {/* Tab content */}
          <motion.div 
            className="lg:w-2/3 bg-[#172135] rounded-xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {workData.map((job) => {
                if (job.id !== activeTabId) return null;
                
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        {job.current && (
                          <span className="px-3 py-1 bg-[#7127BA]/20 text-[#7127BA] text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 mb-4">
                      <FaBuilding className="text-[#7127BA] flex-shrink-0" />
                      <h4 className="text-lg font-medium">
                        {job.company} - {job.location}
                      </h4>
                    </div>
                    
                    {/* <div className="flex items-center gap-2 text-gray-400 mb-6">
                      <FaCalendarAlt className="text-[#7127BA] flex-shrink-0" />
                      <span>{job.date}</span>
                    </div> */}
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {job.desc}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-white font-medium mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#7127BA] mr-2">▹</span>
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <h5 className="text-white font-medium mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#0F172A] text-gray-300 text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for hiding scrollbar but allowing scroll */}
      <style >{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}