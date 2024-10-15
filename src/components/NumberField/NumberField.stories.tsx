import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NumberField from './NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <NumberField {...args} control={control} />;
  },
  args: {
    name: 'field',
    label: 'Number field'
  },
};