// import { useState } from "react";
// import logo from "../../assets/logo.svg";
// import github from "../../assets/github.svg";
// import MobileNav from "./MobileNav";
// import { HamburgerIcon } from "../../icons";

// export default function Navbar() {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   const handleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   }
  
//   return (
//     <nav className="flex items-center md:px-10 p-5 text-white fixed w-full bg-[#111827] z-50">
//       <div>
//         <img src={logo} alt="logo" className="w-20" />
//       </div>
//       <div
//         className=" ml-auto 
//         space-x-10
//         hidden sm:flex
//       "
//       >
//         <ul
//           className="flex items-center space-x-10 text-lg font-semibold
//         "
//         >
//           <a href="#home">
//             <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//               Home
//             </li>
//           </a>
//           <a href="#about">
//             <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//               About
//             </li>
//           </a>
//           <a href="#projects">
//             <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//               Projects
//             </li>
//           </a>
//         </ul>
//         <a
//           href="https://github.com/salskhal"
//           target="blank"
//           className="flex items-center space-x-2 text-lg font-semibold"
//         >
//           <img src={github} alt="github" className="w-8 cursor-pointer" />
//         </a>
//       </div>
//       <div></div>
//       <div className="sm:hidden ml-auto flex items-center space-x-10">
//         <a
//           href="https://github.com/salskhal"
//           target="blank"
//           className="flex items-center space-x-2 text-lg font-semibold"
//         >
//           <img src={github} alt="github" className="w-8 cursor-pointer" />
//         </a>
//         <div onClick={handleMobileNav}>
//           <HamburgerIcon className="w-8 cursor-pointer" />
//         </div>
//       </div>
//       {isMobileNavOpen && (
//         <MobileNav
//           isMobileNavOpen={isMobileNavOpen}
//           setIsMobileNavOpen={setIsMobileNavOpen}
//         />
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import MobileNav from "./MobileNav";
import { HamburgerIcon } from "../../icons";

// Navigation links data to improve maintainability
const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }
];

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => !prev);
  };
  
  // Close mobile nav when escape key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };
  
  return (
    <nav 
      className="flex items-center md:px-10 p-5 text-white fixed w-full bg-[#111827] z-50"
      onKeyDown={handleKeyDown}
      aria-label="Main navigation"
    >
      <div>
        <a href="#home" aria-label="Home">
          <img src={logo} alt="Website logo" className="w-20" />
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <div className="ml-auto space-x-10 hidden sm:flex">
        <ul className="flex items-center space-x-10 text-lg font-semibold">
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className="border-b-2 border-transparent hover:border-white focus:border-white transition-colors py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <a
          href="https://github.com/salskhal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg font-semibold"
          aria-label="GitHub Profile"
        >
          <img src={github} alt="GitHub logo" className="w-8" />
        </a>
      </div>
      
      {/* Mobile Navigation Controls */}
      <div className="sm:hidden ml-auto flex items-center space-x-10">
        <a
          href="https://github.com/salskhal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={github} alt="GitHub logo" className="w-8" />
        </a>
        
        <button 
          onClick={toggleMobileNav}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          className="focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
        >
          <HamburgerIcon className="w-8" />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={toggleMobileNav}
        navLinks={navLinks}
      />
    </nav>
  );
}
