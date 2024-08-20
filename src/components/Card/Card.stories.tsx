import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./";

const meta = {
  title: "UI/Card",
  component: Card,
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "This is a card title",
    text: "text content",
  },
};

export default meta;
