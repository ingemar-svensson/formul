import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextareaField from './TextareaField';

const meta: Meta<typeof TextareaField> = {
  component: TextareaField,
};

export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <TextareaField {...args} control={control} />;
  },
  args: {
    name: 'field',
    label: 'Text area field',
    textareaProps: {rows: 10 }
  },
};