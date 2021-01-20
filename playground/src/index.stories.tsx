import React from 'react';
import { Playground, Button } from "./index";

export default {
  parameters: {
    layout: "centered",
  },
};

export const Button_doc_with_playground = () => (
  <Playground
    scope={{ Button}}
    code={`<Button>Button</Button>`}
  />
);