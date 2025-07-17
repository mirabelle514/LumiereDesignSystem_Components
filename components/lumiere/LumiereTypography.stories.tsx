import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTypography } from './LumiereTypography';

const meta: Meta<typeof LumiereTypography> = {
  title: 'Lumiere/LumiereTypography',
  component: LumiereTypography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'caption', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1 - Playfair Display',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2 - Playfair Display',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3 - Playfair Display',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text - Open Sans. This is the default body text style used throughout the application for regular content.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - Open Sans. Used for small, secondary information.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <LumiereTypography variant="h1">
        Heading 1 - Main Page Title
      </LumiereTypography>
      <LumiereTypography variant="h2">
        Heading 2 - Section Title
      </LumiereTypography>
      <LumiereTypography variant="h3">
        Heading 3 - Subsection Title
      </LumiereTypography>
      <LumiereTypography variant="h4">
        Heading 4 - Card Title
      </LumiereTypography>
      <LumiereTypography variant="accent">
        Accent Text - Italic Style
      </LumiereTypography>
      <LumiereTypography variant="body">
        Body text - Open Sans. This is the default body text style used throughout the application for regular content, descriptions, and general text. It provides good readability and maintains the elegant French-inspired design aesthetic.
      </LumiereTypography>
      <LumiereTypography variant="caption">
        Caption text - Open Sans. Used for small, secondary information like form helper text, metadata, and supplementary details.
      </LumiereTypography>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <LumiereTypography variant="h1" className="text-antique-gold">
        Golden Heading
      </LumiereTypography>
      <LumiereTypography variant="body" className="text-sage-green">
        Green body text for emphasis
      </LumiereTypography>
      <LumiereTypography variant="caption" className="text-burgundy">
        Red caption for warnings
      </LumiereTypography>
    </div>
  ),
}; 