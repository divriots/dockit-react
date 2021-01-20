import React,  { ComponentType } from 'react';

export interface PropType {
  name: string;
  value?: any;
  raw?: any;
  computed?: boolean;
}

export interface Prop {
  required: boolean;
  description?: string;
  type?: PropType;
  tsType?: PropType;
  defaultValue?: {
    value: string,
    computed: boolean,
  };
}

export type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo: {
    description?: string,
    props?: Record<string, Prop>
  }
}

export type PropsProps = {
  of: ComponentWithDocGenInfo
};

export const Props = ({ of }: PropsProps) => {
  const { description, props } = of.__docgenInfo;

  const getType = (prop: Prop) => {
    const type = prop.type || prop.tsType;
    return type.name  === 'union' ? type.raw : type.name;
  }

  return (
    <div>
      <h3>{description}</h3>
      <h2>Properties</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type(s)</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
        {
          Object.entries(props).map(([name, prop]) =>(
            <tr>
              <td>{name}</td>
              <td>{prop.description}</td>
              <td>{getType(prop)}</td>
              <td>{prop.defaultValue?.value}</td>
              <td>{prop.required.toString()}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};