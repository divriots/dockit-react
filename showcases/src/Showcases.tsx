import React, { CSSProperties, ReactNode } from 'react';
import { Box } from '~/box';
import { Text } from '~/text';
import { Clipboard } from '~/clipboard';

const styles = {
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: 'red',
  },
  columnComponentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  rowComponentContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
};

type Gap = { horizontal?: number; vertical?: number };

type ShowcasesProps = {
  /**
  Array of css classes to be showcased
   */
  showcaseClasses?: string[];
  /**
  Array of css styles to be showcased
   */
  showcaseStyles?: { [key: string]: any }[];
  /**
  The component type to be used to showcase.
   */
  showcaseComponent?: 'box' | 'text';
  /**
  The showcase component props.
   */
  componentProps?: Record<string, any>;
  /**
  The gap between showcase components.
   */
  gap?: Gap;
};

type CaptionedComponentProps = {
  caption: string;
  className: string;
  gap?: Gap;
  type: 'box' | 'text';
  captionWidth: string;
  key?: any;
  children?: ReactNode | ReactNode[];
};

const CaptionedComponent = ({
  caption,
  className,
  gap,
  type,
  captionWidth,
  ...otherProps
}: CaptionedComponentProps) => {
  const marginV = gap?.vertical ? `${gap.vertical / 2}px` : `0px`;
  const marginH = gap?.horizontal ? `${gap.horizontal / 2}px` : `0px`;

  const isText = type === 'text';
  const Component = isText ? Text : Box;
  const componentContainer = isText
    ? styles.rowComponentContainer
    : styles.columnComponentContainer;

  return (
    <div
      style={
        {
          ...componentContainer,
          margin: `${marginV} ${marginH}`,
        } as CSSProperties
      }
    >
      <Component className={className} {...otherProps} />
      <Clipboard style={{ width: captionWidth }}>{caption}</Clipboard>
    </div>
  );
};

/**
 A component used to generate showcases for different variations of styles, classes.
 */
export const Showcases = ({
  showcaseClasses,
  showcaseStyles,
  showcaseComponent = 'box',
  componentProps = {},
  gap = { horizontal: 20, vertical: 10 },
}: ShowcasesProps) => {
  const { className, style, ...otherProps } = componentProps;
  const fixedClassName = className || '';

  const container =
    showcaseComponent === 'box' ? styles.rowContainer : styles.columnContainer;

  const { showcases, getProp, getName } = showcaseClasses
    ? {
        showcases: showcaseClasses,
        getProp: (showcaseClass: string) => ({
          className: `${fixedClassName} ${showcaseClass}`,
          style,
        }),
        getName: (cls) => cls,
      }
    : {
        showcases: showcaseStyles,
        getProp: (showcaseStyle: { [key: string]: any }) => ({
          className: fixedClassName,
          style: { ...style, ...showcaseStyle },
        }),
        getName: (s) =>
          `${Object.values(s)[0]}`.trim().replace(/var\(|\)/gi, ''),
      };

  const longestName = showcases
    .map((s) => getName(s))
    .reduce((max, e) => Math.max(e.length, max), 0);
  const captionWidth = `${1 + longestName / 2}rem`;

  return (
    <div style={container as CSSProperties}>
      {showcases.map((showcase) => (
        <CaptionedComponent
          key={getName(showcase)}
          gap={gap}
          captionWidth={captionWidth}
          caption={getName(showcase)}
          type={showcaseComponent}
          {...otherProps}
          {...getProp(showcase)}
        />
      ))}
    </div>
  );
};
