import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variants: {
      theme: "primary",
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variants: {
      theme: "secondary",
    },
  },
};

export const Large: Story = {
  args: {
    variants: {
      size: "lg",
    },
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    variants: {
      size: "sm",
    },
    children: "Small",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variants: {
      theme: "warning",
    },
  },
};

export const Dangerous: Story = {
  args: {
    children: "Dangerous",
    variants: {
      theme: "dangerous",
    },
  },
};
