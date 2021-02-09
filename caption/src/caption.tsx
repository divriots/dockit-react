import React, { useState, CSSProperties } from 'react';
import copyTextToClipboard from 'copy-to-clipboard';

const styles = {
  wrapper: {
    fontSize: '.8rem',
    position: 'relative',
    display: 'inline-block',
  },
  hovered: {
    opacity: 0.7,
    cursor: 'pointer',
  },
  tooltip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '1.1rem',
    fontSize: '.8rem',
    borderRadius: '0.3rem',
    backgroundColor: '#2d3748',
    color: '#ffffff',
    padding: '0rem 0.3rem',
    transition: 'height 200ms ease-out, opacity 200ms ease-in',
    height: '0rem',
    overflow: 'hidden',
    opacity: 0,
    cursor: 'pointer',
  },
  tooltipVisible: {
    height: '1.4rem',
    opacity: 1,
  }
}


export const Caption = ({ text, width }: { text: string, width?: string }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    copyTextToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const captionWidth = width || 'auto';

  return (
    <div>
      <div
        style={{
          ...styles.wrapper,
          width: captionWidth,
          } as CSSProperties}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={copy}
        >
        <div style={(hovered ? styles.hovered : {}) as CSSProperties}>{text}</div>
        <div
          style={
            (hovered ? { ...styles.tooltip, ...styles.tooltipVisible } : styles.tooltip) as CSSProperties
            }>
          {copied ? 'Copied' : 'Copy'}
        </div>
      </div>
    </div>
  );
};