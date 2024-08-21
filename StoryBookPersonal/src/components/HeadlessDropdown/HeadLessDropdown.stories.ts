// import { fn } from "@storybook/test";

import HeadLessDropDown from './HeadLessDropdown.tsx';


export const ActionsData = {

};

export default {
  component: HeadLessDropDown,
  title: 'Components/DropDowns/HeadLess Dropdown',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    items: [
      {
        icon: "https://via.placeholder.com/20",
        text: "Selection One",
        description: "Description for Selection One",
      },
      {
        icon: "https://via.placeholder.com/20",
        text: "Selection Two",
        description: "Description for Selection Two",
      }
    ]
  },
};
