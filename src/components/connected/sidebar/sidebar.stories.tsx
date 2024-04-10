import { StoryFn, Meta } from '@storybook/react';
import { Sidebar as SidebarBase } from './sidebar';

export default {
  title: 'Connected/Sidebar',
  component: SidebarBase,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof SidebarBase>;

const Template: StoryFn<typeof SidebarBase> = (args) => (
  <SidebarBase {...args} />
);

export const Sidebar = Template.bind({});
Sidebar.args = {};
