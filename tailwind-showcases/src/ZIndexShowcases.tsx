import React from 'react';
import { extractClassSuffixes } from './theme-helpers';

export const ZIndexShowcases = ({ theme }: { theme: Record<string, any> }) => {
  const classes = extractClassSuffixes('zIndex', theme).map((s) => `z${s}`);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {classes.map((cls, i) => (
        <div
          className={`${cls} rounded-md bg-indigo-500 shadow-2xl`}
          style={{
            height: '6rem',
            minWidth: '8rem',
            marginLeft: '-6rem',
            padding: '2rem',
            marginTop: `${4 * i}rem`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #fff',
          }}
        >
          <div className="text-white">{cls}</div>
        </div>
      ))}
    </div>
  );
};
