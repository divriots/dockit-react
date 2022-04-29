import * as React from 'react';
import { Clipboard } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const clipboard = () => <Clipboard>test clipboard</Clipboard>;
