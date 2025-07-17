import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereMobile } from './LumiereMobile';

const meta: Meta<typeof LumiereMobile> = {
  title: 'Lumiere/LumiereMobile',
  component: LumiereMobile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-heading mb-2">Standard Mobile Layout</h3>
        <p className="text-body text-muted-foreground">
          This is a standard mobile container with basic styling.
        </p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-heading mb-2">Large Mobile Layout</h3>
        <p className="text-body text-muted-foreground">
          This mobile container has a larger size for more content.
        </p>
      </div>
    ),
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: 'bg-ivory-white border-2 border-antique-gold',
    children: (
      <div className="p-6">
        <h3 className="text-lg font-heading mb-2 text-parisian-navy">Custom Styled</h3>
        <p className="text-body text-parisian-navy/70">
          This mobile container has custom styling applied.
        </p>
      </div>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    variant: 'large',
    children: (
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-antique-gold rounded-full flex items-center justify-center">
            <span className="text-background font-bold">L</span>
          </div>
          <div>
            <h3 className="text-lg font-heading">Lumière Design</h3>
            <p className="text-sm text-muted-foreground">French-inspired design system</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Components</span>
            <span className="text-sm text-muted-foreground">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Stories</span>
            <span className="text-sm text-muted-foreground">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Documentation</span>
            <span className="text-sm text-muted-foreground">Complete</span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <button className="w-full bg-foreground text-background py-2 px-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors">
            View Components
          </button>
        </div>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <LumiereMobile variant="standard">
        <div className="p-4">
          <h4 className="font-heading mb-2">Standard</h4>
          <p className="text-sm text-muted-foreground">Basic mobile container</p>
        </div>
      </LumiereMobile>
      
      <LumiereMobile variant="large">
        <div className="p-4">
          <h4 className="font-heading mb-2">Large</h4>
          <p className="text-sm text-muted-foreground">Larger size for more content</p>
        </div>
      </LumiereMobile>
    </div>
  ),
}; 