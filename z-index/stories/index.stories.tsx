import * as React from 'react';
import { ZIndexShowcases } from '../';
import './z-index-stories.css';

export const z_index_values = () => (
  <ZIndexShowcases values={[`10`, `100`, `1000`, `40`]} />
);

export const z_index_classes = () => (
  <ZIndexShowcases classes={['bottom', 'middle', 'top']} />
);
