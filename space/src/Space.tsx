import React from 'react';

const styles = {
  box: {
    height: '1rem',
    backgroundColor: '#718096',
  },
  table: {
    tableLayout: 'auto',
  },
  boxCell: {
    verticalAlign: 'middle',
  },
};

interface SpaceProps {
  /**
    The different spacing values to showcase.
   */
  scale: (string | number)[] | Record<string, string | number>;
}

/**
  With the Styleshowcase component you can render CSS custom properties showcases based on a prefix and a style key.
*/
export const Space = ({ scale }: SpaceProps) => {
  const scaleValues = (
    Array.isArray(scale)
      ? (scale as any[]).map((s, i) => [i, s])
      : Object.entries(scale)
  ).map(([k, v]) => [
    `${k}`.trim().replace(/var\(|\)/gi, ''),
    typeof v === 'number' ? `${v}px` : v,
  ]);

  return (
    <table style={styles.table}>
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
            <td>
              <pre>{name}</pre>
            </td>
            <td>
              <pre>{value}</pre>
            </td>
            <td style={styles.boxCell}>
              <div style={{ ...styles.box, width: value }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
