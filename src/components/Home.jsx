import Me from "../assets/Me.png";

export default function Home() {
  return (
    <div className="px-10 md:px-32 flex flex-col lg:flex-row items-center min-h-[60vh] pt-32" id="home">
      <div>
        <img src={Me} alt="Me" className="w-full" />
      </div>
      <div className="space-y-10">
        <h1 className="text-2xl font-normal text-white">
          Hello! I am{" "}
          <span className="text-[#7127BA]">Salman-Yusuf Khalid</span>
        </h1>
        <p className="text-xl font-normal text-white underline">
          A Developer Who
        </p>
        <p className=" text-3xl md:text-5xl font-semibold text-white">
          Loves to code and learn new <br />
          things in the world of{" "}
          <span className="text-[#7127BA]">techonology</span>.
        </p>
      </div>
    </div>
  );
}
