import { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./";

const meta = {
  title: "UI/ThemeSwitcher",
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};

export const DarkMode: Story = {
  args: {
    darkModeOn: true,
  },
};

export default meta;
