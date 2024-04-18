import { useArgs } from '@storybook/preview-api';
import { StoryFn, Meta } from '@storybook/react';
import { Drawer as DrawerBase } from './drawer';
import { Button } from '../../forms/button/button';

export default {
  title: 'Primitive/Drawer',
  component: DrawerBase,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof DrawerBase>;

const Template: StoryFn<typeof DrawerBase> = (args) => {
  const [{ show }, updateArgs] = useArgs();
  const toggleOpen = () => updateArgs({ show: !show });
  return (
    <>
      <Button text="Open Drawer" onClick={toggleOpen} />
      <DrawerBase
        {...args}
        show={show}
        onClose={toggleOpen}
        headFragment={<div>Header</div>}
        footerFragment={<div>Footer</div>}
        withOverlay
        withSpacing
        rounded
      >
        <div className="w-full">
          {Array(30)
            .fill('*')
            .map((_, i) => (
              <div key={i}>Modal content {i + 1}</div>
            ))}
        </div>
      </DrawerBase>
    </>
  );
};

export const Drawer = Template.bind({});
Drawer.args = {};
