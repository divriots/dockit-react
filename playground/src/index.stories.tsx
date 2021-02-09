import React from 'react';
import { Playground } from './index';
import { Button } from '../test';

export default {
  parameters: {
    layout: "centered",
  },
};

export const Button_doc_with_playground = () => (
  <Playground scope={{ Button }} code={`
<Button>Button</Button> 
<Button primary>Primary</Button> 
<Button danger>Danger</Button> 
  `} />
);