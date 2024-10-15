import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PasswordField from './PasswordField';

const meta: Meta<typeof PasswordField> = {
  component: PasswordField,
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <PasswordField {...args} control={control} />;
  },
  args: {
    name: 'field',
    label: 'Password field'
  },
};