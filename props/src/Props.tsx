import React from 'react';
import type { ComponentType } from 'react';
import { error } from './error';

export interface PropType {
  name: string;
  value?: any;
  raw?: any;
  computed?: boolean;
}

interface Prop {
  required: boolean;
  description?: string;
  type?: PropType;
  tsType?: PropType;
  defaultValue?: {
    value: string;
    computed: boolean;
  };
}

type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo: {
    description?: string;
    props?: Record<string, Prop>;
  };
};

type PropsProps = {
  /**
    Component with documentation info for which to list the props details.
  */
  of: ComponentWithDocGenInfo;
  filter: (prop: Prop) => boolean;
};

const getType = (prop: Prop) => {
  const type = prop.type || prop.tsType;
  if (!type) return 'undefined';
  switch (type.name) {
    case 'union':
    case 'interection':
      return type.raw;
    case 'enum':
      return type.value.map((v) => v.value).join(' | ');
    default:
      return type.name;
  }
};

/**
  Used for listing the props details of a React component.
*/
export const Props = ({ of, filter = (p) => true }: PropsProps) => {
  if (!of.__docgenInfo) return error('DocGen failed to generate info');

  const { props } = of.__docgenInfo;
  if (!props)
    return error(
      `No Props available for ${of.name}, check props parameter type`
    );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type(s)</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props)
            .filter(([, prop]) => filter(prop))
            .map(([name, prop]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{prop.description}</td>
                <td>
                  <code>{getType(prop)}</code>
                </td>
                <td>{prop.defaultValue?.value}</td>
                <td>{prop.required.toString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
