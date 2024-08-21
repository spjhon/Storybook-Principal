
// import { fn } from "@storybook/test";
import SimpleModal from "./SimpleModal"

export const ActionsData = {};

export default {
  component: SimpleModal,
  title: "Components/Modals/001-Simple Modal",
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

