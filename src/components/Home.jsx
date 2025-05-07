8// import Me from "../assets/Me.png";

// export default function Home() {
//   return (
//     <div className="px-10 md:px-32 flex flex-col lg:flex-row items-center min-h-[60vh] pt-32" id="home">
//       <div>
//         <img src={Me} alt="Me" className="w-full" />
//       </div>
//       <div className="space-y-10">
//         <h1 className="text-2xl font-normal text-white">
//           Hello! I am{" "}
//           <span className="text-[#7127BA]">Salman-Yusuf Khalid</span>
//         </h1>
//         <p className="text-xl font-normal text-white underline">
//           A Developer Who
//         </p>
//         <p className=" text-3xl md:text-5xl font-semibold text-white">
//           Loves to code and learn new <br />
//           things in the world of{" "}
//           <span className="text-[#7127BA]">techonology</span>.
//         </p>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Me from "../assets/Me.png";

// // Tech stack icons - you'll need to install these packages or import actual icons
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiNextdotjs,
//   SiExpress,
//   SiVuedotjs,
// } from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";

// const techStack = [
//   { name: "HTML", icon: FaHtml5, color: "#E34F26" },
//   { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
//   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//   { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
//   { name: "React", icon: FaReact, color: "#61DAFB" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
//   { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
//   { name: "Node.js", icon: FaNodeJs, color: "#339933" },
//   { name: "Express", icon: SiExpress, color: "#000000" },
// ];

// export default function Home() {
//   const textRef = useRef(null);

//   // Terminal-like typing animation for the role text
//   useEffect(() => {
//     if (!textRef.current) return;

//     const roles = [
//       "Frontend Engineer",
//       "React Developer",
//       "UI Specialist",
//       "Mobile App Developer",
//     ];
//     let roleIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let typingSpeed = 1000;

//     const type = () => {
//       const currentRole = roles[roleIndex];

//       if (isDeleting) {
//         textRef.current.textContent = currentRole.substring(0, charIndex - 1);
//         charIndex--;
//         typingSpeed = 1000;
//       } else {
//         textRef.current.textContent = currentRole.substring(0, charIndex + 1);
//         charIndex++;
//         typingSpeed = 1000;
//       }

//       if (!isDeleting && charIndex === currentRole.length) {
//         isDeleting = true;
//         typingSpeed = 1000; // Pause at the end
//       } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//       }

//       setTimeout(type, typingSpeed);
//     };

//     setTimeout(type, 1000);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#0B1121] overflow-hidden ">

//       {/* Hero Section */}
//       <section className="relative px-6 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 ">
//         {/* Animated particles */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div id="particles-js"></div>
//         </div>

//         {/* Image section with animation */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:w-1/2 mb-10 lg:mb-0 relative"
//         >
//           <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#7127BA] relative mx-auto lg:mx-0">
//             <motion.div
//               animate={{
//                 boxShadow: [
//                   "0 0 10px 2px rgba(113, 39, 186, 0.5)",
//                   "0 0 20px 8px rgba(113, 39, 186, 0.7)",
//                   "0 0 10px 2px rgba(113, 39, 186, 0.5)",
//                 ],
//               }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="absolute inset-0 rounded-full"
//             />
//             <img
//               src={Me}
//               alt="Salman-Yusuf Khalid"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Floating tech badges */}
//           <motion.div
//             className="absolute -top-4 -right-4 hidden lg:block"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
//               <FaReact className="mr-1 text-[#61DAFB]" /> React
//             </div>
//           </motion.div>

//           <motion.div
//             className="absolute top-1/2 -left-6 hidden lg:block"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2.5, repeat: Infinity }}
//           >
//             <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
//               <SiNextdotjs className="mr-1" /> Next.js
//             </div>
//           </motion.div>

//           <motion.div
//             className="absolute bottom-0 right-0 hidden lg:block"
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
//               <TbBrandReactNative className="mr-1 text-[#61DAFB]" /> React
//               Native
//             </div>
//           </motion.div>
//           <motion.div
//             className="absolute bottom-1/2 right-0 hidden lg:block"
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//           >
//             <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
//               <TbBrandReactNative className="mr-1 text-[#61DAFB]" /> React
//               Native
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Text section with animations */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="lg:w-1/2 space-y-8 text-center lg:text-left"
//         >
//           <div>
//             <h1 className="text-2xl md:text-3xl font-normal text-white mb-2">
//               Hello! I am{" "}
//               <motion.span
//                 className="text-[#7127BA] inline-block"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 Salman-Yusuf Khalid
//               </motion.span>
//             </h1>
//             <p className="text-xl font-normal text-white flex items-center justify-center lg:justify-start">
//               <span className="mr-2">I am a</span>
//               <span
//                 ref={textRef}
//                 className="text-[#7127BA] font-medium border-r-2 border-[#7127BA] pr-1 animate-pulse"
//               >
//                 Frontend Engineer
//               </span>
//             </p>
//           </div>

//           <motion.p
//             className="text-3xl md:text-5xl font-semibold text-white leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             Loves to code and build <br />
//             innovative solutions with{" "}
//             <motion.span
//               className="text-[#7127BA]"
//               animate={{
//                 textShadow: [
//                   "0 0 5px rgba(113, 39, 186, 0.5)",
//                   "0 0 15px rgba(113, 39, 186, 0.8)",
//                   "0 0 5px rgba(113, 39, 186, 0.5)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               technology
//             </motion.span>
//             .
//           </motion.p>

//           <motion.p
//             className="text-lg text-[#ABADB2] max-w-xl mx-auto lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//           >
//             Detail-oriented Frontend Engineer with 3+ years of experience
//             crafting responsive and accessible applications across web and
//             mobile platforms. Specialized in React, React Native, and Next.js
//             development with a strong focus on performance optimization and
//             user-centric design. Proven track record of delivering scalable
//             solutions and collaborating effectively in agile environments.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//             className="flex flex-wrap gap-3 justify-center lg:justify-start"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 bg-[#7127BA] text-white rounded-lg font-medium hover:bg-[#8233d1] transition-colors"
//             >
//               View Projects
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 border border-[#7127BA] text-white rounded-lg font-medium hover:bg-[#7127BA]/10 transition-colors"
//             >
//               Contact Me
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* About Section with Tech Stack */}
//       <section className="px-6 md:px-16 lg:px-32 py-24 bg-[#0B1121]/80">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-semibold text-white mb-10 text-center">
//             <span className="relative">
//               Tech Stack
//               <motion.span
//                 className="absolute -bottom-2 left-0 h-1 bg-[#7127BA]"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "100%" }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//               />
//             </span>
//           </h2>

//           <motion.div
//             className="flex flex-wrap justify-center gap-4"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             viewport={{ once: true }}
//           >
//             {techStack.map((tech, index) => {
//               const Icon = tech.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{
//                     scale: 1.1,
//                     backgroundColor: "rgba(23, 33, 53, 0.9)",
//                     boxShadow: `0 0 15px 5px rgba(${tech.color}, 0.2)`,
//                   }}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index }}
//                   viewport={{ once: true }}
//                   className="flex items-center gap-2 px-4 py-3 bg-[#172135] rounded-lg"
//                 >
//                   <Icon size={20} style={{ color: tech.color }} />
//                   <p className="text-white">{tech.name}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Me from "../assets/Me.png";

// Tech stack icons - you'll need to install these packages or import actual icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiVuedotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiGraphql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  // { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  // { name: "Redux", icon: SiRedux, color: "#764ABC" },
  // { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  // { name: "Python", icon: FaPython, color: "#3776AB" },
];

export default function Home() {
  return (
    <div className=" bg-[#0B1121] overflow-hidden max-w-7xl mx-auto pt-32 md:pt-20 " id="home">
      {/* Hero Section */}
      <section className="relative px-6 md:px-0  flex flex-col lg:flex-row-reverse items-center justify-center  pt-32 md:pt-20 ">
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div id="particles-js"></div>
        </div>

        {/* Image section with animation - now on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mb-10 lg:mb-0 relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96  rounded-full overflow-hidden border-4 border-[#7127BA] relative mx-auto ">
            {/* <div> */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px 2px rgba(113, 39, 186, 0.5)",
                  "0 0 20px 8px rgba(113, 39, 186, 0.7)",
                  "0 0 10px 2px rgba(113, 39, 186, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
            <img
              src={Me}
              alt="Salman-Yusuf Khalid"
              className="w-full h-full object-cover"
            />
          </div>

          {/* More floating tech badges */}
          <motion.div
            className="absolute -top-4 left-20 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <FaReact className="mr-1 text-[#61DAFB]" /> React
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/4 right-2 hidden lg:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <SiNextdotjs className="mr-1" /> Next.js
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-12 hidden lg:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <SiVuedotjs className="mr-1 text-[#4FC08D]" /> Vue js
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-10 hidden lg:block"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.7, delay: 0.2, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <SiTypescript className="mr-1 text-[#3178C6]" /> TypeScript
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 hidden lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, delay: 0.7, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <SiTailwindcss className="mr-1 text-[#06B6D4]" /> Tailwind
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-1/4 hidden lg:block"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 2.8, delay: 1, repeat: Infinity }}
          >
            <div className="bg-[#172135] text-white px-3 py-1 rounded-full flex items-center text-sm">
              <SiRedux className="mr-1 text-[#764ABC]" /> Redux
            </div>
          </motion.div>
        </motion.div>

        {/* Text section with animations - now on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-normal text-white mb-2">
              Hello! I am{" "}
              <motion.span
                className="text-[#7127BA] inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Salman-Yusuf Khalid
              </motion.span>
            </h1>
            <p className="text-xl font-normal text-white flex items-center justify-center lg:justify-start">
              <span className="mr-2">I am a</span>
              <span className="text-[#7127BA] font-medium">
                Fullstack Engineer
              </span>
            </p>
          </div>

          <motion.p
            className="text-lg text-[#ABADB2] max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Detail-oriented Fullstack Engineer with 3+ years of experience
            crafting responsive and accessible applications across web and
            mobile platforms. Specialized in React, React Native, and Next.js
            development with a strong focus on performance optimization and
            user-centric design. Proven track record of delivering scalable
            solutions and collaborating effectively in agile environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#7127BA] text-white rounded-lg font-medium hover:bg-[#8233d1] transition-colors"
            >
              <a href="https://sals-digit.netlify.app/" target="  blank">
                Digital Resume
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[#7127BA] text-white rounded-lg font-medium hover:bg-[#7127BA]/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with Tech Stack */}
      <section className="px-6 md:px-16 lg:px-32 py-24 bg-[#0B1121]/80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-white mb-10 text-center">
            <span className="relative">
              Tech Stack
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-[#7127BA]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(23, 33, 53, 0.9)",
                    boxShadow: `0 0 15px 5px rgba(${tech.color}, 0.2)`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-3 bg-[#172135] rounded-lg"
                >
                  <Icon size={20} style={{ color: tech.color }} />
                  <p className="text-white">{tech.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
