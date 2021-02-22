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
          marginTop: '3rem',
        }}
      >
        {variations.map((v, i) => (
          <Box
            bg="#6365f1"
            ml="-6rem"
            mt={`${4 * i}rem`}
            height="6rem"
            px="1rem"
            borderRadius=".5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            boxShadow="0 12px 48px rgba(149, 157, 165, 0.6)"
            zIndex={v}
            border="1px solid #fff"
          >
            <div style={{ color: '#fff' }}>{`zIndex="${v}"`}</div>
          </Box>
        ))}
      </div>
    </ThemeProvider>
  );
};
