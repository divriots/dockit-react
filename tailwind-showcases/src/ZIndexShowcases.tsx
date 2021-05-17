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
          key={cls}
          className={cls}
          style={{
            height: '6rem',
            minWidth: '8rem',
            marginLeft: '-6rem',
            padding: '2rem',
            marginTop: `${4 * i}rem`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #FFF',
            borderRadius: '0.375rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backgroundColor: '#6366F1',
          }}
        >
          <div style={{ color: '#FFF' }}>{cls}</div>
        </div>
      ))}
    </div>
  );
};
