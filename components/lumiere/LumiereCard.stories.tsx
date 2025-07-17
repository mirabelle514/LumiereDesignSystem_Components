import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  LumiereCard, 
  LumiereCardHeader, 
  LumiereCardTitle, 
  LumiereCardContent 
} from './LumiereCard';

const meta: Meta<typeof LumiereCard> = {
  title: 'Lumiere/LumiereCard',
  component: LumiereCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'featured', 'elevated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    variant: 'standard',
    children: (
      <LumiereCardContent>
        <p>This is a standard card with simple content.</p>
      </LumiereCardContent>
    ),
  },
};

export const Featured: Story = {
  args: {
    variant: 'featured',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Featured Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This is a featured card with a header and title.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <LumiereCardHeader>
          <LumiereCardTitle>Elevated Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p>This is an elevated card with enhanced shadow and styling.</p>
        </LumiereCardContent>
      </>
    ),
  },
};

export const WithForm: Story = {
  render: () => (
    <LumiereCard variant="featured" className="w-96">
      <LumiereCardHeader>
        <LumiereCardTitle>Contact Form</LumiereCardTitle>
      </LumiereCardHeader>
      <LumiereCardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-parisian-navy mb-1">
            Name
          </label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-antique-gold rounded-md bg-dove-grey focus:outline-none focus:ring-2 focus:ring-antique-gold"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-parisian-navy mb-1">
            Email
          </label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-antique-gold rounded-md bg-dove-grey focus:outline-none focus:ring-2 focus:ring-antique-gold"
            placeholder="Enter your email"
          />
        </div>
        <button className="w-full bg-antique-gold text-parisian-navy px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Submit
        </button>
      </LumiereCardContent>
    </LumiereCard>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <LumiereCard variant="standard" className="w-80">
        <LumiereCardContent>
          <h3 className="font-heading text-lg mb-2">Standard Card</h3>
          <p className="text-sm">Simple and clean design for basic content.</p>
        </LumiereCardContent>
      </LumiereCard>
      
      <LumiereCard variant="featured" className="w-80">
        <LumiereCardHeader>
          <LumiereCardTitle>Featured Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p className="text-sm">Enhanced styling with header and title.</p>
        </LumiereCardContent>
      </LumiereCard>
      
      <LumiereCard variant="elevated" className="w-80">
        <LumiereCardHeader>
          <LumiereCardTitle>Elevated Card</LumiereCardTitle>
        </LumiereCardHeader>
        <LumiereCardContent>
          <p className="text-sm">Premium styling with enhanced shadows.</p>
        </LumiereCardContent>
      </LumiereCard>
    </div>
  ),
}; 