import React from 'react';
import type { ComponentType } from 'react';
import { error } from './error';

type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo: {
    description?: string;
  };
};

type DescriptionProps = {
  /**
    Component with documentation info for which display the description.
  */
  of: ComponentWithDocGenInfo;
};

/**
  React component used to display the description of a React component.
*/
export const Description = ({ of }: DescriptionProps) => {
  if (!of.__docgenInfo) return error('DocGen failed to generate info');
  const { description } = of.__docgenInfo;

  return <div>{description}</div>;
};
