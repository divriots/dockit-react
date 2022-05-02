import React from 'react';

type CardProps = { title: string; paragraph: string };

export const NoPropCard = ({ title, paragraph }: CardProps) => (
  <div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
