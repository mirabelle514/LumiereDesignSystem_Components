import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {},
};
