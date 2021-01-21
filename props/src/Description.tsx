import React, { ComponentType } from 'react';

type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo: {
    description?: string,
  }
}

type DescriptionProps = {
  /**
    Component with documentation info for which display the description.
  */
  of: ComponentWithDocGenInfo
};


/**
  React component used to display the description of a React component.
*/
export const Description = ({ of }: DescriptionProps) => {
  const { description } = of.__docgenInfo;

  return (
    <div>{description}</div>
  );
};