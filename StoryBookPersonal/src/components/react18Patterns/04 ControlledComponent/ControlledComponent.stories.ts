import { fn } from "@storybook/test";

import Controlled from './ControlledComponent';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Controlled,
  title: 'React18 Patterns Book/Controlled Forms',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};


export const UnicoRender = {
  args: {
    type: "dog",
  },
};