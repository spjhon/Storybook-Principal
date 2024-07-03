import { fn } from "@storybook/test";

import Uncontrolled from './UncontrolledComponent';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Uncontrolled,
  title: 'Uncontrolled',
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