//import { fn } from "@storybook/test";

import App from './App';

export const ActionsData = {
  
};

export default {
  component: App,
  title: 'React18 Patterns Book/memo useMemo useCallback',
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