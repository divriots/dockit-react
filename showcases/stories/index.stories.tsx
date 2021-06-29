import React from 'react';
import { Showcases, TextShowcase } from '../index';
import './showcases-stories.css';

export const textDecoration = () => <TextShowcase className="underline" />;

export const opacity_classes = () => {
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
        className: 'box',
        checkeredBackground: true,
      }}
    />
  );
};

export const fontSize_classes = () => {
  const classes = ['xs', 'sm', 'base', 'lg', 'xl', 'xxl', 'xxxl'];

  return (
    <Showcases
      showcaseClasses={classes}
      showcaseComponent="text"
      gap={{ vertical: 20 }}
    />
  );
};

export const opacity_styles = () => {
  const styles = [
    { opacity: 0.0 },
    { opacity: 0.1 },
    { opacity: 0.2 },
    { opacity: 0.3 },
    { opacity: 0.4 },
    { opacity: 0.5 },
    { opacity: 0.6 },
    { opacity: 0.7 },
    { opacity: 0.8 },
    { opacity: 0.9 },
    { opacity: 1 },
  ];

  return (
    <Showcases
      showcaseStyles={styles}
      showcaseComponent="box"
      componentProps={{
        className: 'box',
        checkeredBackground: true,
      }}
    />
  );
};

export const fontSize_styles = () => {
  const styles = [
    { fontSize: 8 },
    { fontSize: 12 },
    { fontSize: 16 },
    { fontSize: 24 },
    { fontSize: 32 },
  ];

  return (
    <Showcases
      showcaseStyles={styles}
      showcaseComponent="text"
      gap={{ vertical: 20 }}
    />
  );
};
