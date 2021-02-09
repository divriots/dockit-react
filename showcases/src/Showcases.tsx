import React, { useState, CSSProperties } from 'react';
import { Box } from '~/box';
import { Text } from '~/text';
import { Caption } from '~/caption';

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
}

type Gap = { horizontal?: number, vertical?: number };
type ComponentType = 'box' | 'text' | undefined;

type ShowcasesProps = {
  showcaseClasses: string[];
  showcaseComponent?: ComponentType;
  componentProps?: Record<string, any>;
  gap?: Gap;
};

type CaptionedComponentProps = {
  caption: string;
  className: string;
  gap?: Gap;
  type: ComponentType;
  captionWidth: string;
};

const CaptionedComponent = ({ caption, className, gap, type, captionWidth, ...otherProps}: CaptionedComponentProps) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    copyTextToClipboard(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marginV = gap?.vertical ? `${gap.vertical / 2}px` : `0px`;
  const marginH = gap?.horizontal ? `${gap.horizontal / 2}px` : `0px`;


  const isText = type === 'text';
  const Component = isText ? Text : Box;
  const componentContainer = isText ? styles.rowComponentContainer : styles.columnComponentContainer;


  return (
    <div style={{
      ...componentContainer,
      margin: `${marginV} ${marginH}`
     } as CSSProperties}>
      <Component className={className} {...otherProps} />
      <Caption text={caption} width={captionWidth} />
    </div>
  )
}

export const Showcases = ({ showcaseClasses = [], showcaseComponent = 'box', componentProps = {}, gap = { horizontal: 20, vertical: 10 } }: ShowcasesProps ) => {
  const { className, ...otherProps} = componentProps;
  const fixedClassName = className || '';

  const container = showcaseComponent === 'box' ?  styles.rowContainer : styles.columnContainer;

  const longestClassName = showcaseClasses.reduce((max, e) => Math.max(e.length, max), 0);
  const captionWidth = `${longestClassName / 2}rem`;

  return (
    <div style={container as CSSProperties}>
      {showcaseClasses.map((className: string) => (
        <CaptionedComponent
            key={className}
            gap={gap}
            captionWidth={captionWidth}
            caption={className}
            className={`${fixedClassName} ${className}`}
            type={showcaseComponent}
            {...otherProps} />
      ))}
    </div>
  );
}