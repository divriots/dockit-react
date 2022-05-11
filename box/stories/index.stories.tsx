import React from 'react';
import { Box } from '../index';
import './box-stories.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const box = () => <Box className="boxStory" />;

export const box_background = () => (
  <Box className="boxStory boxStoryBackground" checkeredBackground />
);

export const box_opacity_by_class = () => (
  <Box className="boxStory boxStoryBackground opacity" checkeredBackground />
);

export const box_opacity_by_style = () => (
  <Box
    className="boxStory"
    showcaseStyle="background-color: #2f855a; opacity: 0.7;"
    checkeredBackground
  />
);
