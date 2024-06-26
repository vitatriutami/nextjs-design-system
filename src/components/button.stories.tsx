import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
      description: "Variant for button"
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    children: "Submit!",
    variant: "primary",
  },
};

export const ButtonSecondary: Story = {
  args: {
    children: "Submit!",
    variant: "secondary",
  },
};

export const ButtonOutline: Story = {
  args: {
    children: "Submit!",
    variant: "outline",
  },
};
