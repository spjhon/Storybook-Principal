import type { Meta, StoryObj } from '@storybook/react';

import { ProductListItem } from './ProductListItem';

const meta = {
  title:"ListItem/list",
  component: ProductListItem,
} satisfies Meta<typeof ProductListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: "primario",
    label: 'ProductListItem',
  },
};