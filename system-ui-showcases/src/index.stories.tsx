import React from 'react';
import { SystemUIShowcases } from './index';
import { Space } from '~/space';
import { defaultTheme } from './default-theme';

export const space = () => <Space scale={defaultTheme.space} />;

export const width = () => (
  <SystemUIShowcases
    theme={{}}
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
    theme={{}}
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
    theme={{}}
    showcaseKey="bg"
    componentProps={{
      width: '8rem',
      height: '8rem',
      boxShadow: 'large',
      borderRadius: 4,
    }}
  />
);

export const boxShadow = () => (
  <SystemUIShowcases
    theme={{}}
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
    theme={{}}
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
    theme={{}}
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

export const borderColor = () => (
  <SystemUIShowcases
    theme={{}}
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

export const fontSize = () => (
  <SystemUIShowcases theme={{}} showcaseKey="fontSize" />
);

export const fontFamily = () => (
  <SystemUIShowcases theme={{}} showcaseKey="fontFamily" />
);

export const fontWeight = () => (
  <SystemUIShowcases theme={{}} showcaseKey="fontWeight" />
);

export const lineHeight = () => (
  <SystemUIShowcases theme={{}} showcaseKey="lineHeight" />
);

export const letterSpacing = () => (
  <SystemUIShowcases theme={{}} showcaseKey="letterSpacing" />
);

export const color = () => <SystemUIShowcases theme={{}} showcaseKey="color" />;
