import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

// Simplified timeline data based on your work experience
const timelineData = [
  {
    year: "2025",
    events: [
      {
        title: "Frontend Engineer at CINNSOL",
        date: "February 2025 - Present",
        isActive: true
      },
      {
        title: "Frontend Engineer at Unleaashified",
        date: "January 2025 - Present",
        isActive: true
      }
    ]
  },
  {
    year: "2024",
    events: [
      {
        title: "Freelance Frontend Developer at Afropanda",
        date: "November 2024 - December 2024",
        isActive: false
      }
    ]
  },
  {
    year: "2023",
    events: [
      {
        title: "Campus Ambassador at Cowrywise",
        date: "June 2023 - Present",
        isActive: true
      },
      {
        title: "Software Engineer Intern at AXA Mansard",
        date: "May 2023 - Present",
        isActive: true
      }
    ]
  },
  {
    year: "2022",
    events: [
      {
        title: "Frontend Developer at Unify",
        date: "May 2022 - August 2022",
        isActive: false
      },
      {
        title: "Frontend Developer at CodeCraft",
        date: "October 2021 - July 2022",
        isActive: false
      }
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-24 bg-[#0A0F1A] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiBNNjAgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0tNDggMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAuMDRuNzkgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#7127BA] rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#7127BA] rounded-full filter blur-[100px] opacity-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-16"
        >
          <FaBriefcase className="text-[#7127BA] text-4xl mr-4" />
          <h2 className="text-4xl font-bold text-white">Career Journey</h2>
          <motion.div 
            className="h-[2px] bg-gradient-to-r from-[#7127BA] to-transparent flex-grow ml-6"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#7127BA] via-[#7127BA]/70 to-[#7127BA]/30"></div>
          
          {timelineData.map((timeBlock, blockIndex) => (
            <div key={blockIndex} className="mb-16 last:mb-0">
              {/* Year marker */}
              <motion.div 
                className="relative flex justify-start md:justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#172135] text-[#7127BA] text-xl font-bold py-2 px-6 rounded-full border border-[#7127BA]/50 shadow-lg shadow-[#7127BA]/20">
                  {timeBlock.year}
                </div>
              </motion.div>
              
              {/* Events for this year */}
              <div className="space-y-8">
                {timeBlock.events.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex}
                    className="relative flex flex-col md:flex-row items-center md:odd:flex-row-reverse"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#172135] border-2 border-[#7127BA]">
                      {event.isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-[#7127BA]/50"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0.2, 0.8]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                      <div className="bg-[#172135] p-6 rounded-lg shadow-md hover:shadow-[#7127BA]/20 transition-shadow duration-300 border-l-2 border-[#7127BA]">
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400">{event.date}</p>
                        {event.isActive && (
                          <span className="inline-block mt-3 px-3 py-1 bg-[#7127BA]/20 text-[#7127BA] text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Empty space for alternate layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Start marker */}
          <motion.div
            className="absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 translate-y-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-8 rounded-full bg-[#7127BA] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}