import React from "react";
import Tindog from "../assets/tindoglogo.png";
import Amazon_clone from "../assets/am.jpg";
import CanteenOrdering from "../assets/ca.jpg";

const Work = () => {
  return (
    <div name='work' className="bg-[#0a192f] w-full sm:h-screen text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl border-b-4 inline font-bold border-pink-600">
            Work
          </p>
          <p className="py-6">check out some my recent project</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Tindog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto containerdiv"
          >
            {/* hover Effect */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-white font-bold text-2xl">Tindog</span>
              <div className="pt-8 text-center">
                <a href="https://md-shadan.github.io/TinDog/">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/md-shadan/TinDog">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CanteenOrdering})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto containerdiv"
          >
            {/* hover Effect */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-white font-bold text-[1.2rem]">Canteen Food Ordering System</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/md-shadan/Canteen-Food-Ordering-System-">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Amazon_clone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto containerdiv"
          >
            {/* hover Effect */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-white font-bold text-2xl">Amazon Clone</span>
              <div className="pt-8 text-center">
                <a href="https://md-shadan.github.io/Amazon-Clone/">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/md-shadan/Amazon-Clone">
                  <button className="text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
