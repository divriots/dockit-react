import React from 'react';
import { Showcases } from './index';
import './showcases-stories.css';

export const opacity = () => {

  const classes = [
    'opacity-0',
    'opacity-10',
    'opacity-20',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-80',
    'opacity-90',
    'opacity-100',
  ];

  return (
    <Showcases
      showcaseClasses={classes}
      showcaseComponent="box"
      componentProps={{
        className: "box",
        checkeredBackground: true
      }}
    />
  );
};

export const fontSize = () => {

  const classes = [
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    'xxl',
    'xxxl',
  ];

  return (
    <Showcases
      showcaseClasses={classes}
      showcaseComponent="text"
      gap={{ vertical: 20 }}
    />
  );
};