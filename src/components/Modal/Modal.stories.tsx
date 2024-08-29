import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./";

const meta = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="min-h-[400px]">
      <Modal>
        <h2 className="text-white font-normal tracking-wide text-heading-font-md">Modal</h2>
      </Modal>
    </div>
  ),
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};

export default meta;
