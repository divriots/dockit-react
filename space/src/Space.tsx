import React from 'react';

const styles = {
  box: {
    height: '1rem',
    backgroundColor: '#718096',
  },
};

interface SpaceProps {
  scale: (string | number)[] | Record<string, string | number>;
}

export const Space = ({ scale }: SpaceProps) => {
  const scaleValues = (Array.isArray(scale)
    ? (scale as any[]).map((s, i) => [i, s])
    : Object.keys(scale).map((k) => [k, scale[k]])
  ).map(([k, v]) => [k, typeof v === 'number' ? `${v}px` : v]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {scaleValues.map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            <td>
              <div style={{ ...styles.box, width: value }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
