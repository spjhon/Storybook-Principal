//import { fn } from "@storybook/test";

import Focus from './Focus';

export const ActionsData = {
  
};

export default {
  component: Focus,
  title: 'React18 Patterns Book/forwardRef Example',
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