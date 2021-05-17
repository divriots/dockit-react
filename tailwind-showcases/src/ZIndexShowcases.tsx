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
            boxShadow: '#000 0px 0px 0px 0px, #000 0px 0px 0px 0px, #00000040 0px 25px 50px -12px',
            backgroundColor: '#6366F1',
          }}
        >
          <div style={{ color: '#FFF' }}>{cls}</div>
        </div>
      ))}
    </div>
  );
};
