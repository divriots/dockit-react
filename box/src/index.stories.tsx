import React from 'react';
import { Box } from "./index";
import './box-stories.scss';

export default {
  parameters: {
    layout: "centered",
  },
};

export const box = () => <Box className="boxStory" checkeredBackground/>;

export const box_background = () => <Box className="boxStory boxStoryBackground" checkeredBackground />;

export const box_background_opacity = () => <Box className="boxStory boxStoryBackground" style={{ opacity: 0.7}} checkeredBackground />;