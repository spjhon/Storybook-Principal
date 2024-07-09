//import { fn } from "@storybook/test";

import Circle from './Circle';

export const ActionsData = {
  
};

export default {
  component: Circle,
  title: 'React18 Patterns Book/SVG Circle',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};


export const UnicoRender = {
  args: {
    x: 40,
    y: 40,
    radius: 40,
    fill: "blue"
  },
};