// import { fn } from "@storybook/test";

import TimeLine from "./TimeLine";

export const ActionsData = {};

export default {
  component: TimeLine,
  title: "TimeLine",
  tags: [],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    timelineData: [
      {
        year: "2016",
        content: [
          "Neque sunt voluptatibus repellat pariatur ut enim.",
          "Eveniet rerum suscipit eveniet amet dignissimos.",
          "Doloremque et distinctio quod molestiae ut."
        ],
        isBig: false
      },
      {
        year: "2017",
        content: [
          "Quo nobis cumque dolor iure voluptatem voluptatem alias soluta."
        ],
        isBig: false
      },
      {
        year: "2018",
        content: [
          "Rerum sit libero possimus amet excepturi.",
          "Exercitationem enim dolores sunt praesentium dolorum praesentium."
        ],
        isBig: true
      },
      // Añade más años según sea necesario...
    ]
  },
};


/*
const timelineData = () => {
  return [
    {
      year: "2016",
      content: [
        "Neque sunt voluptatibus repellat pariatur ut enim.",
        "Eveniet rerum suscipit eveniet amet dignissimos.",
        "Doloremque et distinctio quod molestiae ut."
      ],
      isBig: false
    },
    {
      year: "2017",
      content: [
        "Quo nobis cumque dolor iure voluptatem voluptatem alias soluta."
      ],
      isBig: false
    },
    {
      year: "2018",
      content: [
        "Rerum sit libero possimus amet excepturi.",
        "Exercitationem enim dolores sunt praesentium dolorum praesentium."
      ],
      isBig: true
    },
    // Añade más años según sea necesario...
  ];
};
*/