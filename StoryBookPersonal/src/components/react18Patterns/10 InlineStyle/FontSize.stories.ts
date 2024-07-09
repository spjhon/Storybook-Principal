//import { fn } from "@storybook/test";

import FontSize from './index';

export const ActionsData = {
  
};

export default {
  component: FontSize,
  title: 'React18 Patterns Book/In Line Styles',
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