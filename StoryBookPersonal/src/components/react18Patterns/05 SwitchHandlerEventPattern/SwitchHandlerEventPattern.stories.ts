//import { fn } from "@storybook/test";

import Button from './SwitchHandlerEventPattern';

export const ActionsData = {
  
};

export default {
  component: Button,
  title: 'React18 Patterns Book/Switch Handler Event Pattern',
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