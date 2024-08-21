
// import { fn } from "@storybook/test";
import TimeLineDemo from "./VerticalTimeLine"

export const ActionsData = {};

export default {
  component: TimeLineDemo,
  title: "Components/TimeLines/003-Vertical Time Line",
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

