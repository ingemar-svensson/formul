import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckboxField from './CheckboxField';

const meta: Meta<typeof CheckboxField> = {
  component: CheckboxField,
};

export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <CheckboxField {...args} control={control} checkboxProps={{}} />;
  },
  args: {
    name: 'field',
    label: 'Checkbox field'
  },
};