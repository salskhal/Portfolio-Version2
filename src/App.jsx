import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
export default function App() {
  return (
    <div className="min-h-screen bg-[#111827]">
      <Navbar />
      <Home />
      <Hero />
      <Experience />
      <Project />
    </div>
  );
}
