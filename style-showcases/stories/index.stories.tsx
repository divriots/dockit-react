import React from 'react';
import './tokens.scss';
import { StyleShowcases } from '../index';
import './style-showcases.css';

export const color = () => (
  <StyleShowcases
    prefix="--color"
    styleKey="backgroundColor"
    componentProps={{ className: 'box' }}
  />
);

export const opacity = () => (
  <StyleShowcases
    prefix="--opacity"
    styleKey="opacity"
    componentProps={{ className: 'box' }}
  />
);

export const z_index = () => <StyleShowcases prefix="--z-index" />;

export const transition = () => <StyleShowcases prefix="--transition" />;

export const border_radius = () => (
  <StyleShowcases
    prefix="--border-radius"
    componentProps={{ className: 'box wide' }}
    styleKey="borderRadius"
    checkered-background="false"
  />
);

export const shadow = () => (
  <StyleShowcases
    prefix="--shadow"
    componentProps={{ className: 'box white' }}
    styleKey="boxShadow"
  />
);

export const spacing = () => <StyleShowcases prefix="--spacing" />;

export const letter_spacing = () => (
  <StyleShowcases
    prefix="--letter-spacing"
    showcaseComponent="text"
    styleKey="letterSpacing"
  />
);

export const line_height = () => (
  <StyleShowcases
    prefix="--line-height"
    showcaseComponent="text"
    styleKey="lineHeight"
    componentProps={{ useLongText: true }}
  />
);

export const font_weight = () => (
  <StyleShowcases
    prefix="--font-weight"
    showcaseComponent="text"
    styleKey="fontWeight"
  />
);

export const font_size = () => (
  <StyleShowcases
    prefix="--font-size"
    showcaseComponent="text"
    styleKey="fontSize"
  />
);

export const font_family = () => (
  <StyleShowcases
    prefix="--font-family"
    showcaseComponent="text"
    styleKey="fontFamily"
  />
);
