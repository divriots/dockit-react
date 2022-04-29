import * as React from 'react';
import { longText, shortText } from './texts';

interface TextProps {
  className?: string;
  style?: Record<string, any>;
  useLongText?: boolean;
}

export const Text = ({
  className = '',
  style = {},
  useLongText = false,
}: TextProps) => (
  <div className={className} style={style}>
    {useLongText ? longText : shortText}
  </div>
);
