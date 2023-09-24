import head from "../../assets/head.svg";
import "./preloader.css";

export default function Preloader({ isLoading, setIsLoading }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[#111827]">
      <div className="flex items-center justify-center min-h-screen bg-[#111827]">
        <img src={head} alt="head" className="w-20" />
      </div>
      <div
        className="flex gap-6 items-center justify-center text-white anime"
      >
        
        <p className="text-xl md:text-2xl font-semibold wavy">DEVELOPER</p>
        <p className="text-xl md:text-2xl font-semibold wavy">DESIGNER</p>
        <p className="text-xl md:text-2xl font-semibold wavy">ENGINEER</p>
      </div>
    </div>
  );
}
