import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FileField from './FileField';

const meta: Meta<typeof FileField> = {
  component: FileField,
};

export default meta;
type Story = StoryObj<typeof FileField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <FileField {...args} control={control} />;
  },
  args: {
    name: 'field',
    label: 'File field'
  },
};