import { StoryFn, Meta } from '@storybook/react';
import { Avatar as AvatarBase } from './avatar';

export default {
  title: 'Media/Avatar',
  component: AvatarBase,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof AvatarBase>;

const Template: StoryFn<typeof AvatarBase> = (args) => <AvatarBase {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  name: 'Jame Doe',
};
