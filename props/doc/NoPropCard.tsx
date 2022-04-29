import * as React from 'react';

type CardProps = {};

export const NoPropCard = ({ title, paragraph }: CardProps) => (
  <div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
