import { StoryFn, Meta } from '@storybook/react';
import {
  Checkbox as CheckboxBase,
  FormCheckbox as FormCheckboxBase,
} from './checkbox';

export default {
  title: 'Forms/Checkbox',
  component: CheckboxBase,
  argTypes: {
    color: {
      control: { type: 'select' },
    },
  },
} as Meta<typeof CheckboxBase>;

//ordinary checkbox
const CheckboxTemplate: StoryFn<typeof CheckboxBase> = (args) => (
  <CheckboxBase {...args} />
);
export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {
  // checked: true,
};

//form checkbox
const FormCheckboxTemplate: StoryFn<typeof FormCheckboxBase> = (args) => (
  <FormCheckboxBase {...args} />
);
export const FormCheckbox = FormCheckboxTemplate.bind({});
FormCheckbox.args = {
  checked: true,
  label: 'Withdrawals',
};
