
// import { fn } from "@storybook/test";
import PaperCard from "./PaperCard"

export const ActionsData = {};

export default {
  component: PaperCard,
  title: "Components/Cards/001-PaperCard",
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

