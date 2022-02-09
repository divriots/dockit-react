import React from 'react';
import { error as errorComponent } from './error';
import { useDocgenInfo } from './docgen';
import type { ComponentWithDocGenInfo } from './types';

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
  const [docgenInfo, error] = useDocgenInfo(of);
  if (error) {
    return errorComponent(error.message);
  }
  if (!docgenInfo) {
    return 'Loading...';
  }
  const { description } = docgenInfo;
  return <div>{description}</div>;
};
