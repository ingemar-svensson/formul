import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <TextField {...args} control={control} />;
  },
  args: {
    name: 'field',
    label: 'Text field'
  },
};