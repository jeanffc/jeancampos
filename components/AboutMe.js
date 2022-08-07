import React, { useEffect, useState } from "react";
import userData from "@constants/data";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I&apos;ll get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I&apos;m looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I&apos;d love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  target="_blank"
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group" rel="noreferrer"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-40 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  target="_blank"
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group" rel="noreferrer"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-40 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  target="_blank"
                  href={userData.socialLinks.codepen}
                  className="flex flex-row items-center space-x-4 group" rel="noreferrer"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-40 group-hover:translate-x-0 transition duration-300"></div>
                    Codepen
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  target="_blank"
                  href={userData.socialLinks.freecodecamp}
                  className="flex flex-row items-center space-x-4 group" rel="noreferrer"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-40 group-hover:translate-x-0 transition duration-300"></div>
                    FreeCodeCamp
                  </p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center">
                <a
                  target="_blank"
                  href={userData.socialLinks.hakerrank}
                  className="flex flex-row items-center space-x-4 group" rel="noreferrer"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-40 group-hover:translate-x-0 transition duration-300"></div>
                    HakerRank
                  </p>
                </a>
              </div>

            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="text-3xl px-2 py-1 inline-block font-bold text-gray-700 dark:text-gray-300">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <i className='fab fa-html5 text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-css3-alt text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-js text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-react text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-angular text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-node-js text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-github text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
              <i className='fab fa-aws text-6xl text-gray-700 dark:text-gray-300 mx-4 my-4 '></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
