import React from 'react';
import { Playground, ShadowPlayground } from '../index';
import { Button } from '../test';
import styles from '../test/styles.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const Button_doc_with_playground = () => (
  <Playground
    scope={{ Button }}
    style={{ width: '400px', height: '300px' }}
    code={`
<Button>Button</Button>
<Button primary>Primary</Button>
<Button danger>Danger</Button>
    `}
  />
);

export const Button_doc_with_shadow_playground = () => (
  <ShadowPlayground
    style={{ width: '400px', height: '300px' }}
    styles={styles}
    code={`
<button className="btn">Button</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-danger">Danger</button>
    `}
  />
);

export const Button_doc_with_playground_and_inner_classes = () => (
  <Playground
    style={{ width: '400px', height: '300px' }}
    styles={styles}
    innerClassName="inner-demo"
    code={`
<button className="btn">Button</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-danger">Danger</button>
    `}
  />
);
