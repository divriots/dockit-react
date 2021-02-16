import React from 'react';
import { getVariations } from './theme-helper';
import styled, { ThemeProvider } from 'styled-components';
import {
  layout,
  shadow,
  color,
  border,
  flexbox,
  space,
  position,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${shadow}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${position}
`;

export const ZIndexShowcases = ({ theme }: { theme: Record<string, any> }) => {
  const variations = getVariations('zIndices', theme);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {variations.map((v, i) => (
          <Box
            bg="#444"
            ml="-2rem"
            mt={`${i}rem`}
            width="12rem"
            height="6rem"
            borderRadius=".5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            boxShadow="0 12px 48px rgba(149, 157, 165, 0.3)"
            zIndex={v}
          >
            <div style={{ color: '#fff' }}>{`zIndex="${v}"`}</div>
          </Box>
        ))}
      </div>
    </ThemeProvider>
  );
};
