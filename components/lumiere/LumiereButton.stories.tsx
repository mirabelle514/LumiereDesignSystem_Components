import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereButton } from './LumiereButton';

const meta: Meta<typeof LumiereButton> = {
  title: 'Lumiere/LumiereButton',
  component: LumiereButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2">
        <LumiereButton variant="primary">Primary</LumiereButton>
        <LumiereButton variant="secondary">Secondary</LumiereButton>
        <LumiereButton variant="tertiary">Tertiary</LumiereButton>
        <LumiereButton variant="destructive">Destructive</LumiereButton>
      </div>
      <div className="space-x-2">
        <LumiereButton variant="primary" size="sm">Small</LumiereButton>
        <LumiereButton variant="primary" size="md">Medium</LumiereButton>
        <LumiereButton variant="primary" size="lg">Large</LumiereButton>
      </div>
    </div>
  ),
}; 