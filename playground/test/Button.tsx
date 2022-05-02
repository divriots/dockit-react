import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode | string;
  type?: 'normal' | 'primary' | 'danger';
  primary?: boolean;
  danger?: boolean;
};

const styles = {
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    borderWidth: '1px',
    borderRadius: '2px',
    margin: '0rem 0.1rem',
  },
  primary: {
    backgroundColor: 'rgb(46, 164, 79)',
    color: 'rgb(255, 255, 255)',
  },
  danger: {
    backgroundColor: 'rgb(203, 36, 49)',
    color: 'rgb(255, 255, 255)',
  },
};

export const Button = ({ children, primary, danger }: ButtonProps) => {
  const getStyle = () => {
    const style = styles.button;

    if (primary) return { ...style, ...styles.primary };
    if (danger) return { ...style, ...styles.danger };
    return style;
  };

  return <button style={getStyle()}>{children}</button>;
};
