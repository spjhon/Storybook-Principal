// import { fn } from "@storybook/test";

import Slider from './Slider';

import imagenDemoVeterinary from "./veterinary.png"

export const ActionsData = {

};

export default {
  component: Slider,
  title: 'Slider',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    data: data(),
    activeSlide: 2,
  },
};


function data() {
  return [
    {
      id: 1,
      bgColor: "#F54748",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 2,
      bgColor: "#7952B3",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 3,
      bgColor: "#1597BB",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 4,
      bgColor: "#185ADB",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 5,
      bgColor: "#FF616D",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 6,
      bgColor: "#FF616D",
      icon: imagenDemoVeterinary,
      title: "Lorem Ipsum",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];
}
