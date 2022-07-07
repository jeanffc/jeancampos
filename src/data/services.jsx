import React from 'react';
import { VscPreview, VscEdit, VscCode } from 'react-icons/vsc';

const SERVICES = [
  {
    title: 'Ui Design',
    icon: <VscPreview className="w-full h-full" />,
    description:
      'In tandem with UX, I incorporate prototyping and animation to better help the users and engineers visualize how the product may act.',
  },
  {
    title: 'Web Design',
    icon: <VscEdit className="w-full h-full" />,
    description:
      'In tandem with UX, I incorporate prototyping and animation to better help the users and engineers visualize how the product may act.',
  },
  {
    title: 'Web Development',
    icon: <VscCode className="w-full h-full" />,
    description:
      'My web projects are responsive, accessible, and intuitive for all walks of life while reassuring they will respond the same on any browser.',
  },
];

export default SERVICES;
