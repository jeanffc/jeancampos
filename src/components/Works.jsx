import React from 'react';
import WORKS from '../data/works';
import WorkItem from './WorkItem';

const Works = () => {
  return (
    <div className="py-12 mx-12">
      <h3 className='text-4xl font-extrabold leading-tighter tracking-tighter mb-8 pb-2 border-b'>
        Favorite Works
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {WORKS.map(work => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
