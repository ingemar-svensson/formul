import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SelectField from './SelectField';

const meta: Meta<typeof SelectField> = {
  component: SelectField,
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <SelectField {...args} control={control} options={[
      { label: "Option1", value: "value1"},
      { label: "Option2", value: "value2"},
      { label: "Option3", value: "value3"},
    ]} />;
  },
  args: {
    name: 'field',
    label: 'Select field'
  },
};