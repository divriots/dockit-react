import React from 'react';
import { SystemUIShowcases } from './index';
import { Space } from '~/space';
import { defaultTheme } from './default-theme';

export const space = () => <Space scale={defaultTheme.space} />;

export const width = () => (
  <SystemUIShowcases
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

export const fontSize = () => <SystemUIShowcases showcaseKey="fontSize" />;

export const fontFamily = () => <SystemUIShowcases showcaseKey="fontFamily" />;

export const fontWeight = () => <SystemUIShowcases showcaseKey="fontWeight" />;

export const lineHeight = () => <SystemUIShowcases showcaseKey="lineHeight" />;

export const letterSpacing = () => (
  <SystemUIShowcases showcaseKey="letterSpacing" />
);

export const color = () => <SystemUIShowcases showcaseKey="color" />;
