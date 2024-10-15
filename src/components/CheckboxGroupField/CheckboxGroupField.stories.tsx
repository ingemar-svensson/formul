import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckboxGroupField from './CheckboxGroupField';

const meta: Meta<typeof CheckboxGroupField> = {
  component: CheckboxGroupField,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroupField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <CheckboxGroupField {...args} control={control} options={[
      { label: "Checkbox1", value: "value1"},
      { label: "Checkbox2", value: "value2"},
      { label: "Checkbox3", value: "value3"},
    ]} checkboxProps={{}} />;
  },
  args: {
    name: 'field',
    label: 'CheckboxGroup field'
  },
};