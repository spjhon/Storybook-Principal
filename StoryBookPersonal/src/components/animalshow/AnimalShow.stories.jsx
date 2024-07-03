import { fn } from "@storybook/test";

import AnimalShow from './AnimalShow';


export default {
  component: AnimalShow,
  title: 'AnimalShow',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  
  args: {
    onClick: fn()
  },
};

export const UnicoRender = {
  args: {
    type: "dog",
  },
};