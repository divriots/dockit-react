import type { ComponentType } from 'react';

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
    value: string;
    computed: boolean;
  };
}

export interface DocGenInfo {
  description?: string;
  props?: Record<string, Prop>;
}

export type ComponentWithDocGenInfo = ComponentType & {
  __docgenInfo?: DocGenInfo;
  __dynamicDocgenInfo?: Promise<DocGenInfo>;
};
