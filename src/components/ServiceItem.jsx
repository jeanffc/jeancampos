import React from 'react';

const ServiceItem = ({ title, icon, description }) => {
  return (
    <div className="p-1 shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl hover:-translate-y-2 transform transition">
      <div className="block p-6 bg-white sm:p-8 rounded-xl">
        <div className="sm:pr-8">
          <div className="w-6 h-6 mb-3">
            {icon}
          </div>
          <h5 className="text-xl font-bold text-gray-900">
            {title}
          </h5>
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
