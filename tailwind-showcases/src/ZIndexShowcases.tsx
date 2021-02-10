import React from 'react';
import { extractClassSuffixes } from './theme-helpers';

export const ZIndexShowcases = ({ theme }: { theme: Record<string, any> }) => {
  const classes = extractClassSuffixes('zIndex', theme).map(s => `z${s}`);

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center' }}>
      {classes.map((cls, i) => (
        <div
          className={`${cls} h-32 w-32 -ml-10 rounded-md bg-indigo-500 shadow-2xl`}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: i*10 }}
        >
          <div className="text-white">{cls}</div>
        </div>
      ))}
    </div>
  )
};