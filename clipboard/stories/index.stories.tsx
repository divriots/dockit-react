import React from 'react';
import { Clipboard } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const clipboard = () => (
  <Clipboard>
    <pre>test clipboard</pre>
  </Clipboard>
);
