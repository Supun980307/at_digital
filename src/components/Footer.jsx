import React from "react";
import Logo from "../images/Logo.png";

export default function Footer() {
  return (
    <footer class="bg-purple-700 bottom-0 w-full">
      <div class="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
        <div class="md:flex md:justify-between mr-10 flex lg:flex-row flex-col">
          <div class="ml-0 mb-12 lg:ml-10">
            <img src={Logo} alt="Logo" className="h-25px w-238px" />

            <div class="text-white sm:w-[400px] mt-5">
              <p>
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </div>
          
          <div class="gap-8 sm:gap-24 xl:gap-32 flex flex-col md:flex-row">
            <div>
              <h2 class="mb-6 text-lg font-semibold uppercase text-white">
                Our Technologies
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-2">
                  <a href="#" class="hover:underline ">
                    ReactJS
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Gatsby
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    NextJS
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    NodeJS
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    GraphQL
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 class="mb-6 text-lg font-semibold  uppercase text-white">
                Our Services
              </h2>
              <ul class="text-white font-medium w-auto xl:w-56">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Social media Marketing
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Web & Mobile App Development
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Data & Analytics
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Google Marketing solutions
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Search Engine Optimization
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class=" border-white mt-10 h-[0.5px] bg-white mx-1 md:mx-10 lg:mx-56 xl:mx-80" />

        <div class="flex gap-4 items-center justify-center text-white mt-3">
          <span>Privacy Policy</span>
           <p>|</p>
          <span>Terms & Conditions</span> 
        </div>
      </div>
    </footer>
  );
}
