import { fn } from "@storybook/test";

import AnimalShow from './AnimalShow';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: AnimalShow,
  title: 'AnimalShow',
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