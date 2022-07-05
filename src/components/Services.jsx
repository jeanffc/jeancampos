import React from 'react';
import SERVICES from '../data/services';
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <div className="py-12 mx-12">
      <h3 className='text-4xl font-extrabold leading-tighter tracking-tighter mb-4'>Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map(service => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
