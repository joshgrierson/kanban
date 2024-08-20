import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "UI/Button",
  component: Button,
  render: (args) => <Button {...args}>Button</Button>,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const FillWidth: Story = {
  render: (args) => (
    <div className="p-3">
      <Button {...args}>Button</Button>
    </div>
  ),
  parameters: {
    layout: "padding",
  },
  args: {
    size: "small",
    fill: true,
  },
};

export const InvertColor: Story = {
  args: {
    invertColor: true,
  },
};

export const Icon: Story = {
  args: {
    icon: faPlus,
  },
};
