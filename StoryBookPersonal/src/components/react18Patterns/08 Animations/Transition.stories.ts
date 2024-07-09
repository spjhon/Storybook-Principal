//import { fn } from "@storybook/test";

import Transition from './index';

export const ActionsData = {
  
};

export default {
  component: Transition,
  title: 'React18 Patterns Book/Animations',
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