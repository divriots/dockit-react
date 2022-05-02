import React from 'react';
import { Props } from '../index';
import { JSCard, TSCard, NoPropCard } from '../doc';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const props_from_JS = () => <Props of={JSCard} />;

export const props_from_TS = () => <Props of={TSCard} />;

export const props_from_Unknown = () => <Props of={<div></div>} />;

export const props_from_NoProps = () => <Props of={NoPropCard} />;
