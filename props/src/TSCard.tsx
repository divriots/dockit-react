import React from 'react'; 

type CardProps = {
  /**
    Title of the card.
  */
  title: string,
  paragraph?: string,
  footer: string | number | any[],
  size: 'big' | 'small',
}

/**
  A typescript type component.
*/
export const TSCard = ({ title, paragraph }: CardProps) =>  (
  <div>
    <h2>{ title }</h2>
    <p>
      { paragraph }
    </p>
  </div>
);