import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereToggle } from './LumiereToggle';

const meta: Meta<typeof LumiereToggle> = {
  title: 'Lumiere/LumiereToggle',
  component: LumiereToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get updates about new features and releases',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    description: 'This toggle is disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms',
    description: 'Required to proceed with registration',
  },
};

export const MultipleToggles: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <LumiereToggle
        label="Email notifications"
        description="Receive email updates"
      />
      <LumiereToggle
        label="Push notifications"
        description="Receive push notifications on your device"
      />
      <LumiereToggle
        label="SMS notifications"
        description="Receive text message updates"
      />
      <LumiereToggle
        label="Marketing emails"
        description="Receive promotional content"
      />
    </div>
  ),
}; 