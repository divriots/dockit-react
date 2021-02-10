import React from 'react';
import { TailwindShowcases, ZIndexShowcases } from './index';
import 'twind/shim';
import twTheme from 'tailwindcss/defaultTheme.js';
import { Space } from '~/space';

export const bg_color = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="backgroundColor"
    componentProps={{
      className: "shadow-xl h-32 w-32",
      checkeredBackground: true,
    }}
  />
);

export const opacity = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="opacity"
    componentProps={{
      className: "shadow-xl h-32 w-32 bg-blue-700",
    }}
  />
);

export const shadow = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="shadow"
    componentProps={{
      className: "h-32 w-32 bg-white",
    }}
  />
);

export const border_radius = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="borderRadius"
    componentProps={{
      className: "shadow-2xl h-32 w-32 bg-blue-400",
    }}
  />
);

export const border_width = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="borderWidth"
    componentProps={{
      className: "h-32 w-32 bg-gray-50",
    }}
  />
);

export const border_color = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="borderColor"
    componentProps={{
      className: "h-32 w-32 bg-gray-50 border-4 rounded",
    }}
  />
);

export const font_family = () => (
  <TailwindShowcases theme={twTheme} showcaseKey="fontFamily" />
);


export const font_size = () => (
  <TailwindShowcases theme={twTheme} showcaseKey="fontSize" />
);

export const font_weight = () => (
  <TailwindShowcases theme={twTheme} showcaseKey="fontWeight" />
);

export const letter_spacing = () => (
  <TailwindShowcases theme={twTheme} showcaseKey="letterSpacing" />
);

export const line_height = () => (
  <TailwindShowcases
    theme={twTheme}
    showcaseKey="lineHeight"
    componentProps={{ useLongText: true }}
  />
);

export const text_color = () => (
  <TailwindShowcases theme={twTheme} showcaseKey="textColor" />
);

export const z_index = () => <ZIndexShowcases theme={twTheme} />;

export const spacing = () => (
  <Space scale={twTheme.spacing} />
);