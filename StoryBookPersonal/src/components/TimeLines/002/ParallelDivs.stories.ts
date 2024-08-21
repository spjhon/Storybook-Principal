// import { fn } from "@storybook/test";

import ParallelDivs from "./TimeLine02";

export const ActionsData = {};

export default {
  component: ParallelDivs,
  title: "Components/TimeLines/002-TimeLine2",
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
