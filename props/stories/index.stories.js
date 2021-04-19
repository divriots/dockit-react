import React from 'react';
import { Props } from '../index';
import { JSCard, TSCard } from '../test';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const props_from_JS = () => <Props of={JSCard} />;

export const props_from_TS = () => <Props of={TSCard} />;
