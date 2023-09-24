export default function CTA() {
  return (
    <div className="px-10  py-24 md:px-32  ">
      <h1
        className=" font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        id="contact"
      >
        Sold Yet?
      </h1>
      <p className="text-2xl font-semibold text-white mt-10">
        I am always looking for new opportunities, so if you think I would be a
        good fit for your team, then please get in touch.
      </p>
      <a
        href="mailto:olaniyisal@gmail.com"
        target="blank"
        className="flex items-center space-x-2 text-lg font-semibold mt-10"
      >
        <button className="bg-[#172135] px-10 py-3 rounded-lg text-white">
          Get In Touch
        </button>
      </a>
    </div>
  );
}
