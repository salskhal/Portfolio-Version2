import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="md:px-10 p-5 flex  items-center justify-between">
      <div>
        <p className="text-white">
          Made with ❤️
        </p>
      </div>
      <div className="flex items-center space-x-10">
        <a
          href=""
          target="blank"
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <img src={twitter} alt="twitter" className="w-6 cursor-pointer" />
        </a>

        <a
          href=""
          target="blank"
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <img src={linkedin} alt="linkedin" className="w-6 cursor-pointer" />
        </a>
        <a
          href=""
          target="blank"
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <img src={github} alt="github" className="w-6 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
