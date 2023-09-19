import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[16px] sm:text-xl text-pink-600">Hi, my name is</p>
        <h1 className="text-[1.6rem] sm:text-4xl font-bold text-[#ccd6f6]">
          Mohammed Shadan A
        </h1>
        <h2 className="text-[1.6rem] sm:text-4xl text-[#8892b0]">
          I'm Frontend developer
        </h2>
        <p className="text-[16px] sm:text-xl text-[#8892b0] py-4 max-w-[700px]">
          I'm Frontend developer with a passion for creating user-friendly web
          interfaces. Currently expanding skillset to become a full-stack
          developer, seeking opportunities to contribute to both front and
          back-end development projects.{" "}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 group px-6 py-3 my-2 flex items-center text-[14pt] hover:bg-pink-600 hover:border-pink-600">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
