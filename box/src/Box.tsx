import React, { CSSProperties, ReactNode } from 'react';

const styles = {
  checkered: { 
    opacity: 1,
    backgroundColor: '#000000',
    backgroundImage:
      `linear-gradient(45deg, #999 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #999 75%),
      linear-gradient(45deg, transparent 75%, #999  75%),
      linear-gradient(45deg, #999 25%, #fff 25%)`,    
    backgroundSize: `1rem 1rem`,       
    backgroundPosition: `0 0, 0 0, -0.5rem -0.5rem, 0.5rem 0.5rem`, 
    position: 'absolute',
    top: 0,
    zIndex: -1,
    boxShadow: 'none',
  },
  wrapper: {
    position: 'relative',
  },
  fullWidth: {
    width: '100%',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

interface BoxProps {
  checkeredBackground?: boolean;
  fullWidth?: boolean,
  className?: string;
  style?: Record<string, any>;
  children: ReactNode | ReactNode[];
};

export const Box = ({ checkeredBackground = true, className, style = {}, children }: BoxProps) => (
  <div style={styles.wrapper as CSSProperties}>
    {checkeredBackground &&
    <div className={className} style={
      { ...style, ...styles.checkered } as CSSProperties
      } />
    }
    <div className={className} style={{ ...styles.content, ...style } as CSSProperties}>
      {children}
    </div>
  </div>
);