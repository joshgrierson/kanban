import { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "./";
import { Button } from "../../Button";

const meta = {
  title: "Layouts/AppLayout",
  component: AppLayout.Layout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AppLayout.Layout>;

type Story = StoryObj<typeof AppLayout.Layout>;

export const Default: Story = {
  render: () => (
    <AppLayout.Layout>
      <AppLayout.Sidebar></AppLayout.Sidebar>
      <AppLayout.Header>
        <AppLayout.HeaderTitle>Heading</AppLayout.HeaderTitle>
        <Button>Button</Button>
      </AppLayout.Header>
    </AppLayout.Layout>
  ),
};

export default meta;
