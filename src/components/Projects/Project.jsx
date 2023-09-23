const projectsData = [
  {
    title: "ShareHub",
    description:
      "A platform that allows learners to see detailed information on a particular path and follow the path to get the best out of it.",
    image: "/images/project1.png",
    tags: ["React", "JavaScript"],
    source: "https://github.com",
    visit: "https://github.com",
    id: 0,
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum?",
    image: "/images/project2.png",
    tags: ["React", "JavaScript"],
    source: "https://github.com",
    visit: "https://github.com",
    id: 1,
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum?",
    image: "/images/project3.png",
    tags: ["React", "JavaScript"],
    source: "https://github.com",
    visit: "https://github.com",
    id: 2,
  },
];

export default function Project() {
  return (
    <div className="px-10 py-10 md:px-32 min-h-screen ">
      <h1 className=" text-4xl font-bold text-white my-10">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </span>
      </h1>
    </div>
  );
}
