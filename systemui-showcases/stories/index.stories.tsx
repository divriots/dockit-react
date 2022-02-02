import React from 'react';
import { SystemUIShowcases, showcaseKeys } from '~/systemui-showcases';
import { primerTheme as theme } from './primer-theme';

export const space = () => (
  <SystemUIShowcases theme={theme} showcaseKey="space" />
);

export const width = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="width"
    componentProps={{
      height: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const height = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="height"
    componentProps={{
      width: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const bg = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="bg"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: 4,
      checkeredBackground: true,
    }}
  />
);

export const shadows = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="boxShadow"
    componentProps={{
      width: '8rem',
      height: '8rem',
      borderRadius: 4,
    }}
  />
);

export const borderRadius = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderRadius"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      bg: 'green.6',
    }}
  />
);

export const borderWidth = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderWidth"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
      borderColor: 'green.6',
      borderStyle: 'solid',
    }}
  />
);

export const borderStyle = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderStyle"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
      borderColor: 'green.6',
      borderWidth: '2px',
    }}
  />
);

export const borderColor = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderColor"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
      borderColor: 'green.6',
      borderStyle: 'solid',
      borderWidth: '5px',
    }}
  />
);

export const border = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="border"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: '1',
    }}
  />
);

export const borderTop = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderTop"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
    }}
  />
);

export const borderBottom = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderBottom"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
    }}
  />
);

export const borderLeft = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderLeft"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
    }}
  />
);

export const borderRight = () => (
  <SystemUIShowcases
    theme={theme}
    showcaseKey="borderRight"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
    }}
  />
);

export const fontSize = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontSize" />
);

export const fontFamily = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontFamily" />
);

export const fontWeight = () => (
  <SystemUIShowcases theme={theme} showcaseKey="fontWeight" />
);

export const lineHeight = () => (
  <SystemUIShowcases theme={theme} showcaseKey="lineHeight" />
);

export const letterSpacing = () => (
  <SystemUIShowcases theme={theme} showcaseKey="letterSpacing" />
);

export const color = () => (
  <SystemUIShowcases theme={theme} showcaseKey="color" />
);

export const zIndex = () => (
  <SystemUIShowcases theme={theme} showcaseKey="zIndex" />
);

export const supportedKeys = () => showcaseKeys;
