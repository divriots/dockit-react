import * as React from 'react';
import { useState } from 'react';
import { Clipboard } from '~/clipboard';

const styles = {
  transitionsWrapper: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  transitionsBox: {
    cursor: 'pointer',
    height: '6rem',
    width: '13rem',
    padding: '.5rem',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #FFF',
    borderRadius: '0.375rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#6366F1',
  },
};

const TransitionBox = ({ value }: { value: string; key: any }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={() => setPressed(!pressed)}
      style={{
        ...styles.transitionsBox,
        transition: `all ${value} ease 0s`,
        marginLeft: `${pressed ? 20 : 0}rem`,
      }}
    >
      <Clipboard style={{ color: '#fff' }}>
        {`${value}`.trim().replace(/var\(|\)/gi, '')}
      </Clipboard>
    </div>
  );
};

export const TransitionShowcases = ({ values }) => (
  <div style={styles.transitionsWrapper}>
    {values.map((value) => (
      <TransitionBox key={value} value={value} />
    ))}
  </div>
);
