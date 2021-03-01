import React, { useState } from 'react';

export type ColorScheme = 'auto' | 'dark' | 'light';

export const StylesheetSwitch = ({
  prefersColorScheme = 'light',
  colorSchemes,
}: {
  prefersColorScheme?: ColorScheme;
  colorSchemes: Record<ColorScheme, string>;
}) => {
  const backgroundColor = 'hsla(0,0%,50%,0.2)';
  const defaultStyle = {
    margin: 0,
    borderRadius: '999px',
  };
  const [colorScheme, setColorScheme] = useState(prefersColorScheme);
  const ColorSchemeInput = ({ scheme }: { scheme: ColorScheme }) => (
    <label
      style={{
        ...defaultStyle,
        padding: '.125rem .5rem',
        fontSize: '70%',
        textTransform: 'uppercase',
        backgroundColor:
          colorScheme === scheme ? backgroundColor : 'transparent',
      }}
    >
      <input type="radio" value={scheme} style={{ display: 'none' }} />
      {scheme}
    </label>
  );
  return (
    <div style={{ position: 'absolute', right: '4', top: '4' }}>
      <link rel="stylesheet" href={colorSchemes[colorScheme]} />
      <form
        onChange={(e) => setColorScheme((e.target as any).value)}
        style={{
          ...defaultStyle,
          padding: '.125rem',
          border: `1px solid ${backgroundColor}`,
        }}
      >
        {Object.keys(colorSchemes).map((k: ColorScheme) => (
          <ColorSchemeInput scheme={k} />
        ))}
      </form>
    </div>
  );
};
