import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereColorSwatch } from './LumiereColorSwatch';

const meta: Meta<typeof LumiereColorSwatch> = {
  title: 'Lumiere/LumiereColorSwatch',
  component: LumiereColorSwatch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    swatchStyle: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Ivory White',
    hex: '#FAF8F3',
    note: 'Primary background color',
  },
};

export const CircleSwatch: Story = {
  args: {
    name: 'Antique Gold',
    hex: '#C6A664',
    note: 'Accent color',
    swatchStyle: { borderRadius: '50%' },
  },
};

export const SquareSwatch: Story = {
  args: {
    name: 'Parisian Navy',
    hex: '#22304A',
    note: 'Primary text color',
    swatchStyle: { borderRadius: '0' },
  },
};

export const RoundedSwatch: Story = {
  args: {
    name: 'Burgundy',
    hex: '#7C3048',
    note: 'Error and warning color',
    swatchStyle: { borderRadius: '12px' },
  },
};

export const AllLumiereColors: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
      <LumiereColorSwatch
        name="Ivory White"
        hex="#FAF8F3"
        note="Primary background color"
        swatchStyle={{ borderRadius: '12px' }}
      />
      <LumiereColorSwatch
        name="Parisian Navy"
        hex="#22304A"
        note="Primary text color"
        swatchStyle={{ borderRadius: '12px' }}
      />
      <LumiereColorSwatch
        name="Antique Gold"
        hex="#C6A664"
        note="Accent color"
        swatchStyle={{ borderRadius: '12px' }}
      />
      <LumiereColorSwatch
        name="Burgundy"
        hex="#7C3048"
        note="Error and warning color"
        swatchStyle={{ borderRadius: '12px' }}
      />
      <LumiereColorSwatch
        name="Sage Green"
        hex="#A6B89A"
        note="Success color"
        swatchStyle={{ borderRadius: '12px' }}
      />
      <LumiereColorSwatch
        name="Dove Grey"
        hex="#E5E2DD"
        note="Secondary background"
        swatchStyle={{ borderRadius: '12px' }}
      />
    </div>
  ),
};

export const DifferentStyles: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      <div>
        <h3 className="text-lg font-heading mb-4">Circle Swatches</h3>
        <div className="grid grid-cols-2 gap-4">
          <LumiereColorSwatch
            name="Ivory White"
            hex="#FAF8F3"
            swatchStyle={{ borderRadius: '50%' }}
          />
          <LumiereColorSwatch
            name="Antique Gold"
            hex="#C6A664"
            swatchStyle={{ borderRadius: '50%' }}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Square Swatches</h3>
        <div className="grid grid-cols-2 gap-4">
          <LumiereColorSwatch
            name="Parisian Navy"
            hex="#22304A"
            swatchStyle={{ borderRadius: '0' }}
          />
          <LumiereColorSwatch
            name="Burgundy"
            hex="#7C3048"
            swatchStyle={{ borderRadius: '0' }}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-heading mb-4">Rounded Swatches</h3>
        <div className="grid grid-cols-2 gap-4">
          <LumiereColorSwatch
            name="Sage Green"
            hex="#A6B89A"
            swatchStyle={{ borderRadius: '12px' }}
          />
          <LumiereColorSwatch
            name="Dove Grey"
            hex="#E5E2DD"
            swatchStyle={{ borderRadius: '12px' }}
          />
        </div>
      </div>
    </div>
  ),
}; 