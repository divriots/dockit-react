import React, { useState, CSSProperties } from 'react';

export type ColorScheme = 'dark' | 'light';

const Sun = () => (
  <svg viewBox="0 0 16 16" stroke="currentColor" style={{ width: '1rem' }}>
    <line id="ray" x1="8" y1="1" x2="8" y2="3" strokeLinecap="round" />
    <circle cx="8" cy="8" r="2" fill="transparent" />
    {Array(7)
      .fill(45)
      .map((v, i) => (i + 1) * v)
      .map((v, i) => (
        <g key={i} transform={`rotate(${v}, 8 8)`}>
          <use href="#ray" />
        </g>
      ))}
  </svg>
);

const labelStyle: CSSProperties = {
  position: 'fixed',
  top: '.75rem',
  right: '.25rem',
  padding: '.25rem',
  borderRadius: '50%',
  backgroundColor: 'hsla(0,0%,50%,0.1)',
};

export const StylesheetSwitch = ({
  defaultColorScheme = 'light',
  stylesheets,
  onSwitch = () => {},
}: {
  defaultColorScheme?: ColorScheme;
  stylesheets: Record<ColorScheme, string>;
  onSwitch?: (scheme: 'dark' | 'light') => void;
}) => {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);
  return (
    <label style={labelStyle}>
      <Sun />
      <link rel="stylesheet" href={stylesheets[colorScheme]} />
      <input
        type="checkbox"
        style={{ display: 'none' }}
        onChange={() => {
          const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
          setColorScheme(newScheme);
          onSwitch(newScheme);
        }}
      />
    </label>
  );
};
