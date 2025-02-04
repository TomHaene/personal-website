import { FileText, Mail } from "lucide-react";

function Home() {
  return (
    <div
      className="bg-std-brown font-nunito flex flex-col-reverse pb-20 lg:flex-row lg:items-center"
      style={{ minHeight: "calc(100vh - (76px + 96px))" }} //Minus the height of the NavBar & the Footer
    >
      <section className="flex-1 px-16 xl:px-40 xl:pr-0 flex flex-col items-center xl:pl-40 xl:items-start ">
        <h2 className="text-white text-4xl mt-5 xl:mt-0 text-center xl:text-start lg:text-6xl font-bold">
          Hi! My Name is Thomas Haene.
        </h2>
        <p className="text-custom-gray text-sm mt-5 text-center xl:text-start">
          Electrical Engineering Major @ McGill University
        </p>

        <p className="text-white font-semibold mt-8 xl:text-lg text-center xl:text-start">
          Welcome to my portfolio site! My interests are primarily in
          Telecommunications and Networks, and in my free-time I enjoy making
          websites. Feel free to contact me at my email, and I encourage you to
          have a look at my work!
        </p>

        {/* Desktop Buttons */}

        <div className="hidden xl:flex justify-start gap-10 xl:gap-16 mt-14">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-custom-orange text-sm text-white font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-darker-orange hover:text-cream gap-2">
              <FileText />
              <p>View Resume</p>
            </button>
          </a>

          <a href="mailto:tom@haene.org">
            <button className="bg-cream text-sm text-black font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-custom-gray hover:text-gray-900 shadow-2xl gap-2">
              <Mail />
              <p>Email Me</p>
            </button>
          </a>
        </div>

        {/* Mobile Buttons */}

        <div className="flex xl:hidden justify-center gap-5 mt-10">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-custom-orange text-sm text-white font-black rounded-3xl lg:p-4 flex items-center justify-center lg:w-44 hover:bg-darker-orange hover:text-cream lg:gap-2 gap-1 w-36 p-3">
              <FileText />
              <p>View Resume</p>
            </button>
          </a>

          <a href="mailto:tom@haene.org">
            <button className="bg-cream text-sm text-black font-black rounded-3xl lg:p-4 flex items-center justify-center lg:w-44 hover:bg-custom-gray hover:text-gray-900 shadow-2xl lg:gap-2 gap-1 w-36 p-3">
              <Mail />
              <p>Email me</p>
            </button>
          </a>
        </div>
      </section>

      <section className="flex-1 flex justify-center pt-10 xl:pt-20 ">
        <img
          src="/pic.png"
          alt=""
          className="h-64 w-64 lg:w-96 lg:h-96 object-cover rounded-full opacity-95"
        />
      </section>
    </div>
  );
}

export default Home;
