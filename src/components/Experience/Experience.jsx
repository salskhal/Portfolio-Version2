const workdata = [
  {
    id: 1,
    title: "Campus Ambassador",
    company: "Cowrywise - Lagos",
    date: "June 2023 - Present",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "AXA Mansard - Lagos",
    date: "May 2023 - Present",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Unify - Ilorin",
    date: "May 2022 - August 2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "CodeCraft - Ilorin",
    date: "October 2021 - July 2022",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis, quibusdam, ratione dolorum quia quae voluptatum natus. Quisquam, voluptatum. Quia, quibusdam. Quisquam, voluptatum. Quia, quibusdam.",
  },
];

export default function Experience() {
  return (
    <div
      className="px-10 py-10 md:px-32 min-h-screen mt-10 gap-5 flex flex-col "
      id="experience"
    >
      <h3 className="text-4xl font-bold text-white my-10">Work Experience</h3>
      <div
        className="
      grid grid-cols-1 md:grid-cols-2 gap-10
      "
      >
        {workdata.map((work) => {
          return (
            <div
              className="flex flex-col space-y-5 
            bg-[#172135] p-5 rounded-xl border-t-4 border-[#7127BA]
            "
              key={work.id}
            >
              <h3 className="text-3xl font-bold text-white">{work.title}</h3>
              <h4 className="text-xl font-semibold text-[#7127BA]">
                {work.company}
              </h4>
              <h5 className="text- font-semibold text-[#7127BA]">
                {work.date}
              </h5>
              {/* <p className="text-white">{work.desc}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
