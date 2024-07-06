//import { fn } from "@storybook/test";

import GeolocationContainer from './GeolocationContainer';

export const ActionsData = {
  
};

export default {
  component: GeolocationContainer,
  title: 'React18 Patterns Book/Container Pattern',
  tags: ['autodocs'],
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