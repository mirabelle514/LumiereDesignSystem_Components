import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereInput } from './LumiereInput';

const meta: Meta<typeof LumiereInput> = {
  title: 'Lumiere/LumiereInput',
  component: LumiereInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    helperText: 'We\'ll never share your email with anyone else.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    type: 'text',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <LumiereInput
        label="Default Input"
        placeholder="Default state"
      />
      <LumiereInput
        label="With Helper Text"
        placeholder="Helper text example"
        helperText="This is helpful information"
      />
      <LumiereInput
        label="With Error"
        placeholder="Error state"
        error="This field has an error"
      />
      <LumiereInput
        label="Disabled Input"
        placeholder="Disabled state"
        disabled
      />
      <LumiereInput
        label="Required Input"
        placeholder="Required field"
        required
      />
    </div>
  ),
}; 