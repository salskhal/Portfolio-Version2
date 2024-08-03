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
    name: "TypeScript",
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
    name: "Next.js",
    icon: ReactIcon,
  },
  
  {
    name: "React Native",
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
    <div className="flex flex-col py-6 min-h-[80vh] items-center justify-center px-10 md:px-32" id="about">
      <div className="flex flex-col justify-center mx-auto">
        <h1 className="text-4xl l font-semibold   text-white my-10 leading-[60px]">
          I&rsquo;m a Software engineer
        </h1>
        <p className="text-2xl md:text-3xl text-[#ABADB2] text-justify leading-10">
        A proficient and meticulous Front-end developer familiar with a wide range of
programming utilities and languages with excellent technical and soft skill
abilities. Proven experience developing responsive, visually appealing, and userfocused web interfaces that enhance user engagement and deliver significant
business outcomes using React, Next.js, JavaScript, Typescript, React Native,
HTML, and CSS.
        </p>
      </div>
      <div className="flex items-center gap-4 justify-center mt-20 flex-wrap">
        {tags.map((tag, index) => {
          // const Icon = tag.icon;
          return (
            <div
              key={index}
              className="flex items-center p-2 bg-[#172135] rounded-lg gap-3 "
            >
{/*               <Icon className="" /> */}
              <p className="text-white">{tag.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
