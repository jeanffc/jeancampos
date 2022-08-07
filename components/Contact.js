import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className=" bg-[#F1F1F1] dark:bg-gray-900 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4 flex flex-col">
            <header className="">
              <h1 className=" text-gray-700 dark:text-gray-200 font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base  text-gray-700 dark:text-gray-200 mt-2">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container flex flex-col grow justify-center">
              <div className="flex flex-row items-center space-x-6 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill text-gray-700 dark:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200 font-light text-sm">
                  <a href={`mailto:${userData.email}`}>
                    {userData.email}
                  </a>
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 p-4">
                <svg fill="currentColor" width="16" height="16" version="1.1" id="lni_lni-github-original" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                  <path d="M32,1.8c-17,0-31,13.8-31,31C1,46.4,9.9,58,22.3,62.2c1.6,0.3,2.1-0.7,2.1-1.4c0-0.7,0-2.7-0.1-5.4
	c-8.6,2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2,0.1-2,0.1-2c3.1,0.1,4.8,3.2,4.8,3.2c2.7,4.8,7.3,3.4,9,2.5
	c0.3-2,1.1-3.4,2-4.2c-6.8-0.7-14.1-3.4-14.1-15.2c0-3.4,1.3-6.1,3.2-8.2c-0.3-0.7-1.4-3.9,0.3-8.2c0,0,2.7-0.8,8.6,3.2
	c2.5-0.7,5.1-1.1,7.8-1.1c2.7,0,5.4,0.3,7.8,1.1c5.9-3.9,8.5-3.2,8.5-3.2c1.7,4.2,0.7,7.5,0.3,8.2c2,2.1,3.2,4.9,3.2,8.2
	c0,11.8-7.3,14.5-14.1,15.2c1.1,1,2.1,3,2.1,5.8c0,4.2-0.1,7.5-0.1,8.5c0,0.8,0.6,1.7,2.1,1.4C54.1,57.8,63,46.3,63,32.6
	C62.9,15.6,49,1.8,32,1.8z"/>
                </svg>
                <p className="text-gray-700 dark:text-gray-200 font-light text-sm">
                  <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    {userData.socialLinks.github}
                  </a>
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin text-gray-700 dark:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200 font-light text-sm">
                  <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    {userData.socialLinks.linkedin}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-8 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600">
              {" "}
              Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-100 mt-8 py-2 text-gray-50 text-sm font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
