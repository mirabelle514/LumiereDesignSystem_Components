import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'UI/Test',
};

export default meta;

export const PlainText: StoryObj = {
  render: () => <div>Hello, Storybook!</div>,
};
