import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./";

const meta = {
  title: "UI/NavBar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};

export default meta;