import React from 'react';

const ServiceItem = ({ title, icon, description }) => {
  return (
    <div className="bg-slate-300 hover:bg-slate-200 hover:-translate-y-2 transform transition rounded-md p-5">
      <div className="text-gray-800 w-6 h-6 mb-3">
        {icon}
      </div>
      <h1 className="font-semibold text-lg text-gray-600 mb-1">
        {title}
      </h1>
      <p className="text-md text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceItem;
