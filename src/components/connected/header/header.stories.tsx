import { StoryFn, Meta } from '@storybook/react';
import { Header as HeaderBase } from './header';

export default {
  title: 'Connected/Header',
  component: HeaderBase,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof HeaderBase>;

const Template: StoryFn<typeof HeaderBase> = (args) => <HeaderBase {...args} />;

export const Header = Template.bind({});
Header.args = {
  user: {
    name: 'John Doe',
  },
};
