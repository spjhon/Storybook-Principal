// import { fn } from "@storybook/test";

import PhotoSlider from './PhotoSlider';
import demo01 from "./img/demo (1).jpeg"
import demo02 from "./img/demo (2).jpeg"
import demo03 from "./img/demo (3).jpeg"
import demo04 from "./img/demo (4).jpeg"


export const ActionsData = {

};

export default {
  component: PhotoSlider,
  title: 'Components/Carousels/002-PhotoSlider',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    data: [
      {
        "src": demo01,
        "alt": "Image 1 for carousel"
      },
      {
        "src": demo02,
        "alt": "Image 2 for carousel"
      },
      {
        "src": demo03,
        "alt": "Image 3 for carousel"
      },
      {
        "src": demo04,
        "alt": "Image 4 for carousel"
      }
    ]
  }
};
