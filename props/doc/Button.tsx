import React from 'react';

type ButtonProps = {
  /**
  Type of the button. Change to adjust styling.
  */
  type?: 'primary' | 'secondary';
  /**
  Label text of the button.
  */
  text: 'string';
  /**
  Whether the button is disabled. A disabled button is greyed out and onPress is not called on touch.
  */
  disabled?: boolean;
  /*
  Function to execute on press.
  **/
  onPress: () => {};
};

/**
A button is component that the user can press to trigger an action.
 */
export const Button = ({
  type = 'primary',
  text,
  disabled = false,
  onPress = () => ({}),
}: ButtonProps) => <div />;
