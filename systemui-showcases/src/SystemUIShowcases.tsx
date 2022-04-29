import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  shadow,
  typography,
} from 'styled-system';
import { Clipboard } from '~/clipboard';
import { shortText, longText } from '~/text';
import { getVariations } from './theme-helper';
import { ZIndexShowcases } from '~/z-index';
import { Space } from '~/space';

interface SystemUIShowcasesProps {
  /**
    A theme object that minds the System UI theme spec
  */
  theme: Record<string, any>;
  /**
    The key from the theme for which to showcase the variations.
  */
  showcaseKey: string;
  /**
    Props of component used to render the variations of the specified theme key.
    The component will be either a box or text depending on the theme key.
  */
  componentProps?: Record<string, any>;
  /**
    Specifies the distance between rendered components, used to adjust the layout.
  */
  gap?: { horizontal?: string; vertical?: string };
}

const Box = styled.div`
  ${shadow};
  ${border};
  ${space};
  ${layout};
  ${color};
`;

const CheckeredBackground = styled.div`
  ${shadow};
  ${border};
  ${space};
  ${layout};
  ${color};
  opacity: 1;
  background-color: #000000;
  background-image: linear-gradient(45deg, #999 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #999 75%),
    linear-gradient(45deg, transparent 75%, #999 75%),
    linear-gradient(45deg, #999 25%, #fff 25%);
  background-size: 1rem 1rem;
  background-position: 0 0, 0 0, -0.5rem -0.5rem, 0.5rem 0.5rem;
  position: absolute;
  top: 0;
  z-index: -1;
  boxshadow: none;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${shadow};
  ${border};
  ${space};
  ${layout};
  ${color};
  ${typography};
`;

const Text = ({ useLongText = false, ...rest }) => (
  <TextContainer {...rest}>{useLongText ? longText : shortText}</TextContainer>
);

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'text' ? 'column' : 'row')};
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ComponentContainer = styled.div`
  margin-right: ${(props) => props.gap?.horizontal};
  margin-bottom: ${(props) => props.gap?.vertical};
  min-width: ${(props) => props.minWidth};
  display: flex;
  flex-direction: ${(props) => (props.usedForText ? 'row-reverse' : 'column')};
  align-items: baseline;
`;

const Error = styled.div`
  color: 'red';
`;

interface ShowcaseComponentProps {
  componentProps?: Record<string, any>;
  gap?: { horizontal?: string; vertical?: string };
  caption: string;
  minWidth: string;
  type: 'box' | 'text';
  useLongText: boolean;
  key?: any;
}

const ShowcaseComponent = ({
  componentProps,
  caption,
  gap,
  minWidth,
  type,
  useLongText,
}: ShowcaseComponentProps) => {
  const { checkeredBackground, ...props } = componentProps;
  return (
    <ComponentContainer
      gap={gap}
      minWidth={minWidth}
      usedForText={type === 'text'}
    >
      {type === 'text' ? (
        <Text {...props} useLongText={useLongText} />
      ) : (
        <div style={{ position: 'relative' }}>
          <Box {...props} />
          {checkeredBackground && <CheckeredBackground {...props} />}
        </div>
      )}
      <Clipboard style={{ width: minWidth }}>{caption}</Clipboard>
    </ComponentContainer>
  );
};

const keyDetails = {
  bg: { themeProp: 'colors', componentType: 'box' },
  backgroundColor: { themeProp: 'colors', componentType: 'box' },
  boxShadow: { themeProp: 'shadows', componentType: 'box' },
  width: { themeProp: 'sizes', componentType: 'box' },
  height: { themeProp: 'sizes', componentType: 'box' },
  borderRadius: { themeProp: 'radii', componentType: 'box' },
  borderWidth: { themeProp: 'borderWidths', componentType: 'box' },
  borderStyle: { themeProp: 'borderStyles', componentType: 'box' },
  borderColor: { themeProp: 'colors', componentType: 'box' },
  border: { themeProp: 'borders', componentType: 'box' },
  borderTop: { themeProp: 'borders', componentType: 'box' },
  borderBottom: { themeProp: 'borders', componentType: 'box' },
  borderLeft: { themeProp: 'borders', componentType: 'box' },
  borderRight: { themeProp: 'borders', componentType: 'box' },
  fontSize: { themeProp: 'fontSizes', componentType: 'text' },
  fontFamily: { themeProp: 'fonts', componentType: 'text' },
  fontWeight: { themeProp: 'fontWeights', componentType: 'text' },
  lineHeight: {
    themeProp: 'lineHeights',
    componentType: 'text',
    useLongText: true,
  },
  letterSpacing: {
    themeProp: 'letterSpacings',
    componentType: 'text',
    useLongText: true,
  },
  color: { themeProp: 'colors', componentType: 'text' },
  zIndex: {
    themeProp: 'zIndex',
    StandaloneComponent: ({ theme }) => {
      const variations = getVariations('zIndices', theme);
      return (
        <ThemeProvider theme={theme}>
          <ZIndexShowcases values={variations} isStyledComponent />
        </ThemeProvider>
      );
    },
  },
  space: {
    themeProp: 'space',
    StandaloneComponent: ({ theme }) => <Space scale={theme.space} />,
  },
};

export const showcaseKeys = Object.keys(keyDetails);

/**
  With this component you can render all variations of a property from
  System UI specification abiding theme https://system-ui.com/theme/.
*/
export const SystemUIShowcases = ({
  theme,
  showcaseKey,
  componentProps = {},
  gap = { horizontal: '2rem', vertical: '2rem' },
}: SystemUIShowcasesProps) => {
  if (!keyDetails[showcaseKey])
    return <Error>{`"${showcaseKey}" is not yet supported.`}</Error>;

  const { themeProp, componentType, useLongText, StandaloneComponent } =
    keyDetails[showcaseKey];

  if (!!StandaloneComponent) {
    return <StandaloneComponent theme={theme} />;
  }

  const variations = getVariations(themeProp, theme);

  if (!variations.length)
    return (
      <Error>{`"${showcaseKey}" has no values in the provided theme`}</Error>
    );

  const longestPropertyName = variations.reduce(
    (max, e) => Math.max(`${e}`.length, max),
    0
  );

  const componentWidth = `${longestPropertyName / 2 + 0.5}rem`;

  return (
    <ThemeProvider theme={theme}>
      <Container type={componentType}>
        {variations.map((v) => {
          const props = { ...componentProps, [showcaseKey]: v };
          return (
            <ShowcaseComponent
              key={v}
              type={componentType}
              gap={gap}
              caption={v}
              componentProps={props}
              minWidth={componentWidth}
              useLongText={useLongText}
            />
          );
        })}
      </Container>
    </ThemeProvider>
  );
};
