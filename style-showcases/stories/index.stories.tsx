import React from 'react';
import './tokens.scss';
import { StyleShowcases } from '../index';
import './style-showcases.css'

export const color = () => (
	<StyleShowcases
		prefix="--color"
		styleKey="background"
		componentProps={{ className: "box" }}
	/>
);

export const opacity = () => (
	<StyleShowcases
		prefix="--opacity"
		styleKey="opacity"
		componentProps={{ className: "box" }}
	/>
);

export const z_index = () => <StyleShowcases
	prefix="--z-index"
/>;

export const transition = () => <StyleShowcases
	prefix="--transition"
/>;

export const border_radius = () => <StyleShowcases
	prefix="--border-radius"
	componentProps={{ className: "box wide" }}
	styleKey="border-radius"
	checkered-background="false"
/>;

export const shadow = () => <StyleShowcases
	prefix="--shadow"
	componentProps={{ className: "box white" }}
	styleKey="box-shadow"
/>;

export const spacing = () => <StyleShowcases
	prefix="--spacing"
/>;

export const letter_spacing = () => <StyleShowcases
	prefix="--letter-spacing"
	showcaseComponent="text"
	styleKey="letter-spacing"
/>;

export const line_height = () => <StyleShowcases
	prefix="--line-height"
	showcaseComponent="text"
	styleKey="line-height"
	componentProps={{ useLongText: true }}
/>;

export const font_weight = () => <StyleShowcases
	prefix="--font-weight"
	showcaseComponent="text"
	styleKey="font-weight"
/>;

export const font_size = () => <StyleShowcases
	prefix="--font-size"
	showcaseComponent="text"
	styleKey="font-size"
/>;

export const font_family = () => <StyleShowcases
	prefix="--font-family"
	showcaseComponent="text"
	styleKey="font-family"
/>;