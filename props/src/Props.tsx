import React, { useState, useEffect } from 'react';
import type { ComponentType } from 'react';
import { error as errorComponent } from './error';

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

interface DocGenInfo {
  description?: string;
  props?: Record<string, Prop>;
}

type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo?: DocGenInfo;
  __dynamicDocgenInfo?: Promise<DocGenInfo>;
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
    case 'intersection':
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
  const [docgenInfo, setDocgenInfo] = useState<DocGenInfo>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (of.__docgenInfo) {
      setDocgenInfo(of.__docgenInfo);
    } else if (of.__dynamicDocgenInfo) {
      Promise.resolve(of.__dynamicDocgenInfo)
        .then(setDocgenInfo)
        .catch(setError);
    } else {
      setError(new Error('DocGen failed to generate info'));
    }
  }, [of]);
  if (error) {
    return errorComponent(error.message);
  }

  const props = docgenInfo?.props;
  if (!props) {
    return 'Loading...';
  }
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
