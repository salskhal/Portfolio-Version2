// import logo from "../../assets/logo.svg";
// import { HomeIcon, AboutIcon, WorkIcon } from "../../icons";
// export default function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
//   const handleMobileNav = (e) => {
//     if (e.target.classList.contains("overlay")) {
//       setIsMobileNavOpen(!isMobileNavOpen);
//     }
//   };
//   return (
//     <div
//       className="fixed w-full h-screen top-0 left-0 bg-blue-950 bg-opacity-90 z-50 sm:hidden overlay"
//       onClick={handleMobileNav}
//     >
//       <div className="fixed p-5 top-0 left-0 w-3/4 bg-[#172135] h-full">
//         <div>
//           <img src={logo} alt="logo" className="w-20" />
//         </div>
//         <div className="flex mt-10 px-2">
//           <ul className="flex flex-col items-center space-y-10 text-lg font-semibold">
//             <a
//               href="#home"
//               onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
//             >
//               <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//                 <div className="flex items-center space-x-2">
//                   <HomeIcon className="w-5" />
//                   <span>Home</span>
//                 </div>
//               </li>
//             </a>
//             <a
//               href="#about"
//               onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
//             >
//               <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//                 <div className="flex items-center space-x-2">
//                   <AboutIcon className="w-5" />
//                   <span>About</span>
//                 </div>
//               </li>
//             </a>
//             <a
//               href="#projects"
//               onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
//             >
//               <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
//                 <div className="flex items-center space-x-2">
//                   <WorkIcon className="w-5" />
//                   <span>Projects</span>
//                 </div>
//               </li>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import { HomeIcon, AboutIcon, WorkIcon } from "../../icons";

export default function MobileNav({ isOpen, onClose, navLinks }) {
  const menuRef = useRef(null);
  
  // Get the appropriate icon for each navigation link
  const getIconComponent = (id) => {
    switch(id) {
      case 'home': return <HomeIcon className="w-5" />;
      case 'about': return <AboutIcon className="w-5" />;
      case 'projects': return <WorkIcon className="w-5" />;
      default: return null;
    }
  };
  
  // Focus trap for accessibility
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      
      // Focus the menu when it opens
      if (menuRef.current) {
        menuRef.current.focus();
      }
    } else {
      // Restore body scroll when menu is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 bg-blue-950 bg-opacity-90 z-50 sm:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div 
        className="fixed p-5 top-0 left-0 w-3/4 bg-[#172135] h-full overflow-y-auto"
        ref={menuRef}
        id="mobile-menu"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center">
          <a href="#home" onClick={onClose} aria-label="Home">
            <img src={logo} alt="Website logo" className="w-20" />
          </a>
          <button 
            onClick={onClose}
            aria-label="Close menu"
            className="text-white p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-10 px-2">
          <ul className="flex flex-col space-y-6 text-lg font-semibold">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-3 border-b-2 border-transparent hover:border-white focus:border-white p-2 transition-colors"
                >
                  {getIconComponent(link.id)}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}