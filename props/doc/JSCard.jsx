import React from 'react';
import PropTypes from 'prop-types';

/**
  A test card component, with javascript.
*/
export const JSCard = ({ title, paragraph }) => (
  <div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);

JSCard.propTypes = {
  /**
    Title of the card.
  */
  title: PropTypes.string.isRequired,

  /**
    Content of the card.
  */
  paragraph: PropTypes.oneOf(['ONE', 'OTHER']).isRequired,
};

JSCard.defaultProps = {
  paragraph: 'This is a default content.',
};
