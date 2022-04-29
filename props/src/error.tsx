import * as React from 'react';

const errorStyle = {
  color: 'tomato',
  border: '1px solid tomato',
  borderRadius: '4px',
  padding: '4px 8px',
};

export const error = (text: string) => <span style={errorStyle}>{text}</span>;
