//import { fn } from "@storybook/test";

import MyComponent from './MyComponent';

export const ActionsData = {
  
};

export default {
  component: MyComponent,
  title: 'React18 Patterns Book/02 Higher Order Component',
  tags: [],
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