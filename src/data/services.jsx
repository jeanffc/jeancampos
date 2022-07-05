import React from 'react';
import { VscPreview, VscEdit, VscCode } from 'react-icons/vsc';

const SERVICES = [
  {
    title: 'Ui Design',
    icon: <VscPreview className="w-full h-full" />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
  },
  {
    title: 'Web Design',
    icon: <VscEdit className="w-full h-full" />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
  },
  {
    title: 'Web Development',
    icon: <VscCode className="w-full h-full" />,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum quia harum eaque, quae laboriosam quisquam distinctio.',
  },
];

export default SERVICES;
