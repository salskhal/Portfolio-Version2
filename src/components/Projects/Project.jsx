import sharehub from "../../assets/sharehub.png";
import unify from "../../assets/unify.png";
import moviebox from "../../assets/moviebox.png";
import solarsystem from "../../assets/solarsystem.png";
import lifeBlog from "../../assets/LifeBlog.png";
import digitalResume from  "../../assets/digitalResume.png"

const projectsData = [
  {
    title: "ShareHub",
    image: sharehub,
    tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
    visit: "https://sharehub1.vercel.app/",
    id: 0,
  },
  {
    title: "Unify",
    image: unify,
    tags: ["Vue", "JavaScript", "Pinia", "Tailwind"],
    visit: "https://unify-three.vercel.app/",
    id: 1,
  },
  {
    title: "MovieBox",
    image: moviebox,
    tags: ["React", "JavaScript", "Rest API"],
    visit: "https://movieboxxx.vercel.app/",
    id: 2,
  },
  {
    title: "Solar System",
    image: solarsystem,
    tags: ["Vue", "JavaScript", "JSON", "CSS-Animation"],
    visit: "https://solarsys.vercel.app/",
    id: 3,
  },
  {
    title: "Life and Living Blog",
    image: lifeBlog,
    tags: ["Vue", "JavaScript", "Tailwind"],
    visit: "https://life-and-living.vercel.app/",
    id: 4,
  },
  {
    title: "Digital Resume",
    image: digitalResume,
    tags: ["Vue", "JavaScript", "Tailwind"],
    visit: "https://sals-digit.netlify.app/",
    id: 5,
  }
];

export default function Project() {
  return (
    <div className="px-10 pb-10 py-24 md:px-32 min-h-screen" id="projects">
      <h1 className=" text-4xl font-bold text-white my-10">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#172135] rounded-xl shadow-xl overflow-hidden"
          >
            <img src={project.image} alt={project.title} />
            <div className="p-4">
              <h1 className="text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <div className="flex flex-wrap mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold text-gray-400 p-3 bg-[#111827] rounded-xl mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 "
              >
                
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#fff"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
