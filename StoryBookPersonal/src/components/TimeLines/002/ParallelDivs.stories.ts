// import { fn } from "@storybook/test";

import ParallelDivs from "./TimeLine02";

export const ActionsData = {};

export default {
  component: ParallelDivs,
  title: "TimeLine2",
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
