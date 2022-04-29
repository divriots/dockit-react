import * as React from 'react';
import { Showcases } from '~/showcases';
import { getCssCustomProps } from './css-props';
import { ZIndexShowcases } from '~/z-index';
import { Space } from '~/space';
import { TransitionShowcases } from '~/transitions';

const styles = {
  error: {
    color: 'red',
  },
};

interface StyleShowcasesProps {
  /**
    Props of component used to render the variations of the specified theme key.
    The component will be either a box or text depending on the theme key.
  */
  componentProps?: Record<string, any>;
  /**
    The prefix of the css props to showcase.
  */
  prefix: string;
  /**
    The style key to use for showcasing.
  */
  styleKey?: string;
  /**
    Specifies the distance between rendered components, to adjust the layout.
  */
  gap?: { horizontal?: number; vertical?: number };
  /**
    The component type to be used to showcase.
   */
  showcaseComponent?: 'box' | 'text';
}

/**
  With the Styleshowcase component you can render CSS custom properties showcases based on a prefix and a style key.
*/
export const StyleShowcases = ({
  prefix,
  styleKey,
  componentProps = {},
  showcaseComponent,
  gap,
}: StyleShowcasesProps) => {
  const props = getCssCustomProps(prefix);

  const getCssValue = (name) => `var(${name})`;

  if (/space|spacing/gi.test(prefix) && !/letter/gi.test(prefix)) {
    return (
      <Space
        scale={props.reduce(
          (acc = {}, [name, value]) => ({ ...acc, [getCssValue(name)]: value }),
          {}
        )}
      />
    );
  }

  const values = props.map(([name]) => getCssValue(name));

  if (/z-index/gi.test(prefix)) return <ZIndexShowcases values={values} />;

  if (/transition/gi.test(prefix))
    return <TransitionShowcases values={values} />;

  const showcaseStyles = props.map(([name]) => ({
    [styleKey]: getCssValue(name),
  }));

  return (
    <Showcases
      showcaseComponent={showcaseComponent}
      showcaseStyles={showcaseStyles}
      componentProps={componentProps}
      gap={gap}
    />
  );
};
