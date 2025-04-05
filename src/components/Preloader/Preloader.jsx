// import head from "../../assets/head.svg";
// import "./preloader.css";

// export default function Preloader({ isLoading, setIsLoading }) {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[#111827]">
//       <div className="flex items-center justify-center min-h-screen bg-[#111827]">
//         <img src={head} alt="head" className="w-20" />
//       </div>
//       <div
//         className="flex gap-6 items-center justify-center text-white anime"
//       >
        
//         <p className="text-xl md:text-2xl font-semibold wavy">DEVELOPER</p>
//         <p className="text-xl md:text-2xl font-semibold wavy">DESIGNER</p>
//         <p className="text-xl md:text-2xl font-semibold wavy">ENGINEER</p>
//       </div>
//     </div>
//   );
// }



import { motion } from "framer-motion";
import head from "../../assets/head.svg";
import "./preloader.css";

export default function Preloader() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for the head image
  const headVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for the glow effect
  const glowVariants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { 
      scale: 1.2, 
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Animation variants for the texts
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Progress bar animation
  const progressVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center bg-[#0B1121]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Animated glow effect behind the head */}
        <motion.div 
          className="absolute rounded-full bg-[#7127BA]/30 w-32 h-32"
          variants={glowVariants}
        ></motion.div>
        
        {/* Head image */}
        <motion.div
          className="relative"
          variants={headVariants}
        >
          <motion.img 
            src={head} 
            alt="head" 
            className="w-24 h-24"
            animate={{
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
        {/* Text container */}
        <motion.div
          className="flex gap-6 items-center justify-center text-white overflow-hidden"
        >
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-[#7127BA]"
            variants={textVariants}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2
              }
            }}
          >
            DEVELOPER
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl font-semibold"
            variants={textVariants}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4
              }
            }}
          >
            DESIGNER
          </motion.p>
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-[#7127BA]"
            variants={textVariants}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: 0.6
              }
            }}
          >
            ENGINEER
          </motion.p>
        </motion.div>
        
        {/* Loading progress bar */}
        <motion.div className="w-64 h-1 bg-[#172135] rounded-full mt-8 overflow-hidden">
          <motion.div 
            className="h-full bg-[#7127BA]"
            variants={progressVariants}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
