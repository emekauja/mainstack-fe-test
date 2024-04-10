import { StoryFn, Meta } from '@storybook/react';
import { MenuButton as MenuButtonBase } from './items';
import { HomeIcon } from '../../../assets/icons/icons';

export default {
  title: 'Forms/Button',
  component: MenuButtonBase,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof MenuButtonBase>;

const Template: StoryFn<typeof MenuButtonBase> = (args) => (
  <MenuButtonBase {...args} />
);

export const MenuButton = Template.bind({});
MenuButton.args = {
  variant: 'filled',
  icon: <HomeIcon />,
  text: 'Moon light',
};

export const ActiveMenuButton = Template.bind({});
ActiveMenuButton.args = {
  variant: 'filled',
  icon: <HomeIcon />,
  text: 'Moon light',
  active: true,
};
