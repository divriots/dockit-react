import React from 'react';
import { Text } from '~/text';
import { Caption } from '~/caption';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

type TextShowcaseProps = {
  /**
   * Class to showcase.
   */
  showcaseClass?: string;
  /**
   * Style to showcase. 
   */
  showcaseStyle?: { [key: string]: any };
  /**
   * Whether to use long text.
   */
  useLongText?: boolean;
  /**
  The showcase component props.
   */
  componentProps?: Record<string, any>;
};

/**
  Component used to showcase different text styles or classes.
 */
export const TextShowcase = ({
  showcaseClass,
  showcaseStyle,
  useLongText = false,
  componentProps,
}: TextShowcaseProps) => {

  const { className, style, ...otherProps } = componentProps || {};
  const fixedClassName = className || '';

  const { componentClass, componentStyle, caption } = showcaseClass
    ? {
      componentClass: `${fixedClassName} ${showcaseClass}`,
      componentStyle: style,
      caption: showcaseClass
    }
    : {
      componentClass: fixedClassName,
      componentStyle: { ...style, ...showcaseStyle },
      caption: JSON.stringify(showcaseStyle, null, ' ').replaceAll(/{|}|"/g, '').trim(),
    };

  const captionWidth = `${caption.length / 1.8}rem`;

  return (
    <div style={styles.container} >
      <Caption text={caption} width={captionWidth} />
      <Text className={componentClass} style={componentStyle} useLongText={useLongText} {...otherProps} />
    </div>)
};
