import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DateField from './DateField';

const meta: Meta<typeof DateField> = {
  component: DateField,
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const Default: Story = {
  render: (args, { control }) => {
    return <DateField {...args} control={control} datePickerProps={{dateFormat: 'dd-MM-yyyy'}} />;
  },
  args: {
    name: 'field',
    label: 'Date field'
  },
};