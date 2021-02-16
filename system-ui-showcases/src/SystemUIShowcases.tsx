import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  shadow,
  typography,
} from 'styled-system';
import { Caption } from '~/caption';
import { shortText, longText } from '~/text';
import { getVariations } from './theme-helper';

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
  display: flex;
  align-items: center;
  justify-content: center;
  ${shadow}
  ${border}
  ${space}
  ${layout}
  ${color}
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${shadow}
  ${border}
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

const Text = ({ useLongText = false, ...rest }) => (
  <TextContainer {...rest}>{useLongText ? longText : shortText}</TextContainer>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ComponentContainer = styled.div`
  margin-right: ${(props) => props.gap?.horizontal};
  margin-bottom: ${(props) => props.gap?.vertical};
  min-width: ${(props) => props.minWidth};
  display: flex;
  flex-direction: ${(props) => (props.usedForText ? 'row-reverse' : 'column')};
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
}

const ShowcaseComponent = ({
  componentProps,
  caption,
  gap,
  minWidth,
  type,
  useLongText,
}: ShowcaseComponentProps) => (
  <ComponentContainer
    gap={gap}
    minWidth={minWidth}
    usedForText={type === 'text'}
  >
    {type === 'text' ? (
      <Text {...componentProps} useLongText={useLongText} />
    ) : (
      <Box {...componentProps} />
    )}
    <Caption text={caption} width={minWidth} />
  </ComponentContainer>
);

const keyDetails = {
  bg: { themeProp: 'colors', componentType: 'box' },
  boxShadow: { themeProp: 'shadows', componentType: 'box' },
  width: { themeProp: 'sizes', componentType: 'box' },
  height: { themeProp: 'sizes', componentType: 'box' },
  borderRadius: { themeProp: 'radii', componentType: 'box' },
  borderWidth: { themeProp: 'borderWidths', componentType: 'box' },
  borderColor: { themeProp: 'colors', componentType: 'box' },
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
};

/**
  With the `SystemUIShowcases` component you can render all variations of a property from
  System UI specification abiding theme (https://system-ui.com/theme/).
*/
export const SystemUIShowcases = ({
  theme,
  showcaseKey,
  componentProps = {},
  gap = { horizontal: '2rem', vertical: '2rem' },
}: SystemUIShowcasesProps) => {
  if (!keyDetails[showcaseKey])
    return <Error>{`"${showcaseKey}" is not yet supported.`}</Error>;

  const { themeProp, componentType, useLongText } = keyDetails[showcaseKey];
  const variations = getVariations(themeProp, theme);

  if (!variations.length)
    return (
      <Error>{`"${showcaseKey}" has no values in the provided theme`}</Error>
    );

  const longestPropertyName = variations.reduce(
    (max, e) => Math.max(`${showcaseKey}=${e}`.length, max),
    0
  );
  const componentWidth = `${longestPropertyName / 2}rem`;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {variations.map((v) => {
          const props = { ...componentProps, [showcaseKey]: v };
          return (
            <ShowcaseComponent
              key={v}
              type={componentType}
              gap={gap}
              caption={`${showcaseKey}="${v}"`}
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
