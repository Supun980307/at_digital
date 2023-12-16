import React from "react";
import Hero from "../images/Main.png";
import Img1 from "../images/image2.png";
import Img2 from "../images/image1.png";

export default function Content() {
  return (
    <section>
      <div className="relative">
        <div>
          <img src={Hero} alt="Hero" />
        </div>
        <div className="lg:absolute lg:bottom-10 md:bottom-0 lg:left-16 bg-gradient-to-r from-[rgba(77,202,121,1)] to-[rgba(28,189,221,1)] lg:w-[630px] md:w-full p-4 ">
          <p className="font-bold text-4xl lg:text-5xl md:text-5xl text-white ml-4 mr-4 leading-11 ">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </p>
          <button
            type="button"
            class="focus:outline-none text-white focus:ring-4 font-inter rounded-sm text-sm px-4 py-1 me-2 mt-5 ml-4 mb-5 bg-orange-500 bg-opacity-100 p-4"
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </div>

      <div className="items-center lg:mt-36">
        <div className="sm:flex items-center p-3">
          <div className="lg:ml-40 lg:mr-24 lg:w-96 h-auto md:items-center sm:items-center p-3 ">
            <img src={Img1} alt="Img1" />
          </div>
          <div className="ml-4 lg:w-[520px] md:w-[415px] sm:w-[370px] sm:text-left text-center mr-4 ">
            <p className="font-bold text-2xl text-purple-700 mb-4">
              Web & Mobile App Development
            </p>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button
              type="button"
              class="focus:outline-none text-white focus:ring-4 font-inter rounded-sm text-sm px-4 py-1 me-2 mt-5 mb-2 bg-orange-500 bg-opacity-100 p-4"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex mt-14 items-center flex-col-reverse sm:flex-row mb-8 ">
          <div className="lg:ml-40 md:ml-10 lg:w-[520px] md:w-[520px] sm:w-[370px] sm:text-left text-center mr-4 ml-4">
            <p className="font-bold text-2xl text-purple-700 mb-4 w-[300px] sm:w-auto">
              Digital Strategy Consulting
            </p>
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>

            <button
              type="button"
              class="focus:outline-none text-white focus:ring-4 font-inter rounded-sm text-sm px-4 py-1 me-2 mt-5 mb-2 bg-orange-500 bg-opacity-100 p-4"
            >
              LEARN MORE
            </button>
          </div>
          <div className="lg:ml-40 lg:mr-24 lg:w-96 h-auto md:items-center sm:items-center p-6 ">
            <img src={Img2} alt="Img2" />
          </div>
        </div>
      </div>
    </section>
  );
}
