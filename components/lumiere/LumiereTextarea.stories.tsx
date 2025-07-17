import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTextarea } from './LumiereTextarea';

const meta: Meta<typeof LumiereTextarea> = {
  title: 'Lumiere/LumiereTextarea',
  component: LumiereTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Maximum 500 characters',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    error: 'Description is required',
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only Content',
    value: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 3,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required...',
    required: true,
    rows: 3,
  },
};

export const LargeTextarea: Story = {
  args: {
    label: 'Long Content',
    placeholder: 'Enter a longer piece of content...',
    rows: 8,
    helperText: 'Perfect for longer content like articles or detailed descriptions',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <LumiereTextarea
        label="Default State"
        placeholder="Default textarea"
        rows={3}
      />
      
      <LumiereTextarea
        label="With Helper Text"
        placeholder="Textarea with helper text"
        helperText="This is helpful information"
        rows={3}
      />
      
      <LumiereTextarea
        label="With Error"
        placeholder="Textarea with error"
        error="This field has an error"
        rows={3}
      />
      
      <LumiereTextarea
        label="Disabled"
        value="This textarea is disabled"
        disabled
        rows={3}
      />
      
      <LumiereTextarea
        label="Required Field"
        placeholder="This field is required"
        required
        rows={3}
      />
    </div>
  ),
}; 