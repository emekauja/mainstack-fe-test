import { StoryFn, Meta } from '@storybook/react';
import { EmptyState as EmptyStateBase } from './emptyState';
import { InsertChartIcon } from '../../../assets/icons/icons';

export default {
  title: 'Primitive/EmptyState',
  component: EmptyStateBase,
  argTypes: {},
} as Meta<typeof EmptyStateBase>;

const Template: StoryFn<typeof EmptyStateBase> = (args) => (
  <EmptyStateBase {...args} />
);

export const EmptyStateCard = Template.bind({});
EmptyStateCard.args = {
  title: 'No Home page found',
  subTitle: 'It seems you can only view revenue on this text app',
  icon: <InsertChartIcon />,
};
