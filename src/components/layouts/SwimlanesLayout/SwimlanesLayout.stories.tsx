import { Meta, StoryObj } from "@storybook/react";
import { SwimlanesLayout } from "./";
import { Card, Props as CardProps } from "../../Card";

const meta = {
  title: "Layouts/SwimlanesLayout",
  component: SwimlanesLayout.Layout,
  parameters: {
    layout: "padding",
  },
} satisfies Meta<typeof SwimlanesLayout.Layout>;

type Story = StoryObj<typeof SwimlanesLayout.Layout>;

const SwimlaneCardsCol1: CardProps[] = [
  { title: "Card one", text: "todo card" },
  { title: "Card two", text: "todo card" },
  { title: "Card three", text: "todo card" },
];

const SwimlaneCardsCol2: CardProps[] = [
  { title: "Card one", text: "todo card" },
  { title: "Card two", text: "todo card" },
  { title: "Card three", text: "todo card" },
  { title: "Card four", text: "todo card" },
  { title: "Card five", text: "todo card" },
];

const SwimlaneCardsCol3: CardProps[] = [
  { title: "Card one", text: "todo card" },
  { title: "Card two", text: "todo card" },
];

const SwimlaneCardsCol4: CardProps[] = [
  { title: "Card one", text: "todo card" },
  { title: "Card two", text: "todo card" },
  { title: "Card three", text: "todo card" },
  { title: "Card four", text: "todo card" },
  { title: "Card five", text: "todo card" },
  { title: "Card six", text: "todo card" },
];

export const Default: Story = {
  render: () => {
    return (
      <SwimlanesLayout.Layout className="p-3">
        <SwimlanesLayout.Swimlane>
          <SwimlanesLayout.SwimlaneHeader>Todo</SwimlanesLayout.SwimlaneHeader>
          <SwimlanesLayout.SwimlaneContent>
            {SwimlaneCardsCol1.map((card, index) => (
              <Card
                key={`${card.title}_${index}`}
                title={card.title}
                text={card.text}
                className="mb-3"
              />
            ))}
          </SwimlanesLayout.SwimlaneContent>
        </SwimlanesLayout.Swimlane>
        <SwimlanesLayout.Swimlane>
          <SwimlanesLayout.SwimlaneHeader>In Progress</SwimlanesLayout.SwimlaneHeader>
          <SwimlanesLayout.SwimlaneContent>
            {SwimlaneCardsCol2.map((card, index) => (
              <Card
                key={`${card.title}_${index}`}
                title={card.title}
                text={card.text}
                className="mb-3"
              />
            ))}
          </SwimlanesLayout.SwimlaneContent>
        </SwimlanesLayout.Swimlane>
        <SwimlanesLayout.Swimlane>
          <SwimlanesLayout.SwimlaneHeader>Review</SwimlanesLayout.SwimlaneHeader>
          <SwimlanesLayout.SwimlaneContent>
            {SwimlaneCardsCol3.map((card, index) => (
              <Card
                key={`${card.title}_${index}`}
                title={card.title}
                text={card.text}
                className="mb-3"
              />
            ))}
          </SwimlanesLayout.SwimlaneContent>
        </SwimlanesLayout.Swimlane>
        <SwimlanesLayout.Swimlane>
          <SwimlanesLayout.SwimlaneHeader>Done</SwimlanesLayout.SwimlaneHeader>
          <SwimlanesLayout.SwimlaneContent>
            {SwimlaneCardsCol4.map((card, index) => (
              <Card
                key={`${card.title}_${index}`}
                title={card.title}
                text={card.text}
                className="mb-3"
              />
            ))}
          </SwimlanesLayout.SwimlaneContent>
        </SwimlanesLayout.Swimlane>
      </SwimlanesLayout.Layout>
    );
  },
};

export default meta;
