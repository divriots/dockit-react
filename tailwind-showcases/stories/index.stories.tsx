import React from 'react';
import '../styles.css';
import config from '../../tailwind.config.js';
import { TailwindShowcases } from '../index';

export const bg_color = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="backgroundColor"
    componentProps={{
      className: 'shadow-xl h-32 w-32',
      checkeredBackground: true,
    }}
  />
);

export const bg_image = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="backgroundImage"
    componentProps={{
      className: 'shadow-xl h-32 w-32 from-yellow-400 via-red-500 to-pink-500',
      checkeredBackground: true,
    }}
  />
);

export const opacity = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="opacity"
    componentProps={{
      className: 'shadow-xl h-32 w-32 bg-blue-700',
    }}
  />
);

export const shadow = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="shadow"
    componentProps={{
      className: 'h-32 w-32 bg-white',
    }}
  />
);

export const border_radius = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="borderRadius"
    componentProps={{
      className: 'shadow-2xl h-32 w-32 bg-blue-400',
    }}
  />
);

export const border_width = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="borderWidth"
    componentProps={{
      className: 'h-32 w-32 bg-gray-50',
    }}
  />
);

export const border_color = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="borderColor"
    componentProps={{
      className: 'h-32 w-32 bg-gray-50 border-4 rounded',
    }}
  />
);

export const font_family = () => (
  <TailwindShowcases {...config} showcaseKey="fontFamily" />
);

export const font_size = () => (
  <TailwindShowcases {...config} showcaseKey="fontSize" />
);

export const font_weight = () => (
  <TailwindShowcases {...config} showcaseKey="fontWeight" />
);

export const letter_spacing = () => (
  <TailwindShowcases {...config} showcaseKey="letterSpacing" />
);

export const line_height = () => (
  <TailwindShowcases
    {...config}
    showcaseKey="lineHeight"
    componentProps={{ useLongText: true }}
  />
);

export const text_color = () => (
  <TailwindShowcases {...config} showcaseKey="textColor" />
);

export const z_index = () => (
  <TailwindShowcases {...config} showcaseKey="zIndex" />
);

export const space = () => (
  <TailwindShowcases {...config} showcaseKey="space" />
);
