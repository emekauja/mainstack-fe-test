import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Text as TypographyText } from './text';

export default {
  title: 'Typography/Text',
  component: TypographyText,
  argTypes: {
    fontSize: {
      //options: ['text-sm', 'text-md', 'text-xl', 'text-2xl'],
      control: { type: 'select' },
    },
    casing: {
      control: { type: 'select' },
    },
    textDecoration: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof TypographyText>;

const Template: StoryFn<typeof TypographyText> = (args) => (
  <TypographyText {...args} />
);

export const Text = Template.bind({});
Text.args = {
  asComp: 'h1',
  children:
    'Store Transactions, Get Tipped, Withdrawals, Chargebacks, Cashbacks',
};
