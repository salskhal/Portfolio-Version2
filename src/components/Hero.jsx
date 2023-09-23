import {
  CssIcon,
  ExpressIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  VueIcon,
  ReactIcon,
} from "../icons";

const tags = [
  {
    name: "HTML",
    icon: HtmlIcon,
  },
  {
    name: "CSS",
    icon: CssIcon,
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    name: "Vue.js",
    icon: VueIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Node.js",
    icon: NodeIcon,
  },
  {
    name: "Express",
    icon: ExpressIcon,
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col py-6 min-h-[80vh] items-center justify-center px-10 md:px-32">
      <div className="flex flex-col justify-center mx-auto">
        <h1 className="text-4xl l font-semibold   text-white my-10 leading-[60px]">
          I&rsquo;m a Software engineer
        </h1>
        <p className="text-2xl md:text-3xl text-[#ABADB2] text-justify leading-10">
          A frontend-focused software engineer specializing in building dynamic
          user interfaces using Vue.js and React. Proficient in HTML, CSS, and
          JavaScript, I create responsive and visually appealing designs. With a
          strong problem-solving ability and attention to detail, I ensure a
          seamless and enjoyable user experience. Passionate about learning and
          staying current with frontend technologies, I embrace new challenges
          to expand my skillset.
        </p>
      </div>
      <div className="flex items-center gap-4 justify-center mt-20 flex-wrap">
        {tags.map((tag, index) => {
          const Icon = tag.icon;
          return (
            <div
              key={index}
              className="flex items-center p-2 bg-[#172135] rounded-lg gap-3 "
            >
              <Icon className="" />
              <p className="text-white">{tag.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
