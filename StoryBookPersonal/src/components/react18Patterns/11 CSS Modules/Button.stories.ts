//import { fn } from "@storybook/test";

import Button from './Button';

export const ActionsData = {
  
};

export default {
  component: Button,
  title: 'React18 Patterns Book/CSS Modules',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};


export const UnicoRender = {
  args: {
    
  },
};