import { Meta, StoryObj } from "@storybook/react";
import AppLayout, { Header, HeaderTitle, Sidebar } from "./";
import { Button } from "../../Button";

const meta = {
  title: "Layouts/AppLayout",
  component: AppLayout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AppLayout>;

type Story = StoryObj<typeof AppLayout>;

export const Default: Story = {
  render: () => (
    <AppLayout>
      <Sidebar></Sidebar>
      <Header>
        <HeaderTitle>Heading</HeaderTitle>
        <Button>Button</Button>
      </Header>
    </AppLayout>
  ),
};

export default meta;
