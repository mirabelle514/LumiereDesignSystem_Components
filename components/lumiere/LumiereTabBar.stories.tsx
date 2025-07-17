import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LumiereTabBar } from './LumiereTabBar';

const meta: Meta<typeof LumiereTabBar> = {
  title: 'Lumiere/LumiereTabBar',
  component: LumiereTabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: { type: 'select' },
      options: ['home', 'profile', 'settings', 'messages'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock icons for stories
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const defaultItems = [
  { id: 'home', icon: HomeIcon, label: 'Home' },
  { id: 'profile', icon: UserIcon, label: 'Profile' },
  { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  { id: 'messages', icon: MessageIcon, label: 'Messages' }
];

export const Default: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
  },
};

export const WithActiveProfile: Story = {
  args: {
    items: defaultItems,
    activeItem: 'profile',
  },
};

export const WithActiveSettings: Story = {
  args: {
    items: defaultItems,
    activeItem: 'settings',
  },
};

export const TextOnly: Story = {
  args: {
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
      { id: 'settings', label: 'Settings' }
    ],
    activeItem: 'overview',
  },
};

export const WithCustomStyling: Story = {
  args: {
    items: defaultItems,
    activeItem: 'home',
    className: 'bg-ivory-white border border-antique-gold',
  },
}; 