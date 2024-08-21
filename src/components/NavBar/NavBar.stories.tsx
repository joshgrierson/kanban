import { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "UI/NavBar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Nav item one",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item two",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item three",
        link: "/",
        icon: faLink,
      },
    ],
  },
};

export const WithHeading: Story = {
  args: {
    heading: "Nav Heading",
    items: [
      {
        title: "Nav item one",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item two",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item three",
        link: "/",
        icon: faLink,
      },
    ],
  },
};

export const ActiveLink: Story = {
  args: {
    items: [
      {
        title: "Nav item one",
        link: "/",
        active: true,
        icon: faLink,
      },
      {
        title: "Nav item two",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item three",
        link: "/",
        icon: faLink,
      },
    ],
  },
};

export const InvertLink: Story = {
  args: {
    items: [
      {
        title: "Nav item one",
        link: "/",
        active: true,
        icon: faLink,
      },
      {
        title: "Nav item two",
        link: "/",
        icon: faLink,
      },
      {
        title: "Nav item three",
        link: "/",
        icon: faLink,
      },
      {
        title: "+ Create",
        link: "/",
        invert: true,
        icon: faLink,
      },
    ],
  },
};

export default meta;
