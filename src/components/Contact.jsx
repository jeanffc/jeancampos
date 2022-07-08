import React from 'react'
import { IconContext } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-12 mx-12">
      <h3 className='text-4xl font-extrabold leading-tighter tracking-tighter mb-8 pb-2 border-b'>
        Contact
      </h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mx-auto">
        <p className='flex-grow text-base text-gray-500 mb-4 '>
          Are you interested in collaborating or want to connect or chat? If so, hit the contact button down below or contact me via LinkedIn.
        </p>
        <a href="mailto:jeanffc@gmail.com" className='btn-md text-gray-200 bg-gray-900 hover:bg-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out'>
          Email Me
          <IconContext.Provider value={{ className: "text-gray-200 ml-2" }}>
            <div>
              <FaArrowRight />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}

export default Contact
