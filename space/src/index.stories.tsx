import React from 'react';
import { Space } from './index';

export const space_numbers_array_scale = () => (
  <Space scale={[0, 1, 8, 16, 24, 32, 64, 128]} />
);

export const space_rem_scale = () => (
  <Space scale={[0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem']} />
);


export const space_literal = () => (
  <Space scale={{ small: 4, medium: 8, large: 16 }} />
);