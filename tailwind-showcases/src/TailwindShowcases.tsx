import React from 'react';
import { Showcases } from '~/showcases';
import { extractClassSuffixes } from './theme-helpers';
import resolveConfig from 'tailwindcss/resolveConfig';
import { ZIndexShowcases } from '~/z-index';
import { Space } from '~/space';

const styles = {
  error: {
    color: 'red',
  },
};

interface TailwindShowcasesProps {
  /**
    Props of component used to render the variations of the specified theme key.
    The component will be either a box or text depending on the theme key.
  */
  componentProps?: Record<string, any>;
  /**
    A theme object that minds the tailwindcss theme structure.
  */
  theme?: Record<string, any>;
  /**
    The key from the theme for which to showcase the variations.
  */
  showcaseKey: string;
  /**
    Specifies the distance between rendered components, to adjust the layout.
  */
  gap?: { horizontal?: number; vertical?: number };
}

const getClassSuffixes = (theme: Record<string, any>) => ({
  colors: extractClassSuffixes('colors', theme),
  backgroundImage: extractClassSuffixes('backgroundImage', theme),
  opacity: extractClassSuffixes('opacity', theme),
  boxShadow: extractClassSuffixes('boxShadow', theme),
  borderRadius: extractClassSuffixes('borderRadius', theme),
  borderWidth: extractClassSuffixes('borderWidth', theme),
  fontFamily: extractClassSuffixes('fontFamily', theme),
  fontSize: extractClassSuffixes('fontSize', theme),
  fontWeight: extractClassSuffixes('fontWeight', theme),
  letterSpacing: extractClassSuffixes('letterSpacing', theme),
  lineHeight: extractClassSuffixes('lineHeight', theme),
});

const showcaseDetails = {
  backgroundColor: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.colors.map((s) => `bg${s}`),
  },
  backgroundImage: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.backgroundImage.map((s) => `bg${s}`),
  },
  opacity: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.opacity.map((s) => `opacity${s}`),
  },
  shadow: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.boxShadow.map((s) => `shadow${s}`),
  },
  borderRadius: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.borderRadius.map((s) => `rounded${s}`),
  },
  borderWidth: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.borderWidth.map((s) => `border${s}`),
  },
  borderColor: {
    component: 'box',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.colors.map((s) => `border${s}`),
  },
  fontFamily: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.fontFamily.map((s) => `font${s}`),
  },
  fontSize: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.fontSize.map((s) => `text${s}`),
  },
  fontWeight: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.fontWeight.map((s) => `font${s}`),
  },
  textColor: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.colors.map((s) => `text${s}`),
  },
  letterSpacing: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.letterSpacing.map((s) => `tracking${s}`),
  },
  lineHeight: {
    component: 'text',
    getClasses: (suffixes: Record<string, any>) =>
      suffixes.lineHeight.map((s) => `leading${s}`),
  },
  zIndex: {
    renderShowcases: (theme: Record<string, any>) => {
      const classes = extractClassSuffixes('zIndex', theme).map((s) => `z${s}`);
      return <ZIndexShowcases classes={classes} />;
    },
  },
  space: {
    renderShowcases: (theme: Record<string, any>) => (
      <Space scale={theme.spacing} />
    ),
  },
};

export const showcaseKeys = Object.keys(showcaseDetails);

/**
  With the TailwindShowcases component you can render all variations of a property from
  the tailwindcss theme.
*/
export const TailwindShowcases = ({
  theme: partialTheme = {},
  showcaseKey,
  componentProps = {},
  gap,
}: TailwindShowcasesProps) => {
  if (!showcaseKeys.includes(showcaseKey))
    return (
      <p style={styles.error}>
        {`Other keys than ${supportedKeys.join(', ')} are not yet supported`}
      </p>
    );

  const { theme } = resolveConfig({ theme: partialTheme });

  const { getClasses, component, renderShowcases } =
    showcaseDetails[showcaseKey];

  if (!!renderShowcases) return renderShowcases(theme);

  const classSuffixes = getClassSuffixes(theme);
  const classes = getClasses ? getClasses(classSuffixes) : [];
  return (
    <Showcases
      showcaseComponent={component}
      showcaseClasses={classes}
      componentProps={componentProps}
      gap={gap}
    />
  );
};
