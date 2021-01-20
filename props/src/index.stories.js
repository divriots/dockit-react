import React, { useEffect } from 'react';
import { Props } from "./index";
import { JSCard } from './JSCard';
import { TSCard } from './TSCard';



export default {
  parameters: {
    layout: "centered",
  },
};

export const props_from_JS = () => <Props of={JSCard} />;

export const props_from_TS = () => <Props of={TSCard} />;