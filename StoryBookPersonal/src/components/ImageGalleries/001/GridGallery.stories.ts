// import { fn } from "@storybook/test";

import GridGallery from "./GridGallery";

export const ActionsData = {};

export default {
  component: GridGallery,
  title: "Components/Image Galleries/001-Grid Gallery",
  tags: [],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    galleryID: "my-test-gallery",
    images: [
      {
        largeURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
        thumbnailURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
        width: 1875,
        height: 2500,
      },

      {
        largeURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
        thumbnailURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
        width: 1669,
        height: 2500,
      },

      {
        largeURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
        thumbnailURL:
          "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
        width: 2500,
        height: 1666,
      },
    ],
  },
};
