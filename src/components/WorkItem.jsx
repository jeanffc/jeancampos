import React from 'react';

const WorkItem = ({ imgUrl, title, tech, workUrl }) => {
  return (
    <a
      href={workUrl}
      target="_blank"
      rel="noreferrer"
      className="border bg-gray-50 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={imgUrl}
        alt="work"
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-5 text-gray-600 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {tech.map(item => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default WorkItem;
