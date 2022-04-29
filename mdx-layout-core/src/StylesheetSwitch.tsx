import * as React from 'react';
import { CSSProperties } from 'react';

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
  marginLeft: '.5rem',
  borderRadius: '50%',
  backgroundColor: 'hsla(0,0%,50%,0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: '2rem',
};

export const StylesheetSwitch = ({
  colorScheme,
  onSwitch = () => {},
}: {
  colorScheme: ColorScheme;
  onSwitch?: (scheme: ColorScheme) => void;
}) => {
  return (
    <label style={labelStyle}>
      <Sun />
      <input
        type="checkbox"
        style={{ display: 'none' }}
        onChange={() => onSwitch(colorScheme === 'dark' ? 'light' : 'dark')}
      />
    </label>
  );
};
