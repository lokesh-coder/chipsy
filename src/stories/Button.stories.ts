import type { StoryObj, Meta } from "@storybook/html";
import type { ButtonProps } from "./Button";
import { createButton } from "./Button";

const meta = {
  title: "DOCUMENTATION/Chipsy",
  tags: ["autodocs"],
  render: (args) => {
    return createButton(args);
  },
  args: {
    count: 1,
    level: 0.5,
    isRandom: false,
    colorTheme: "light",
  },
  argTypes: {
    isRandom: { control: "boolean", defaultValue: false },
    count: {
      control: { type: "number", min: 1, max: 100000, step: 1 },
      defaultValue: 1,
      description: "Number of buttons to generate",
    },
    level: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      defaultValue: 0.5,
      description: "Color depth 0 to 1",
    },
    label: {
      control: "text",
      defaultValue: "Chipsy",
      description: "Button contents",
    },
    cls: {
      control: "text",
      defaultValue: "btn",
      description: "Button class name",
    },
    colorTheme: {
      control: {
        type: "inline-radio",
      },
      options: ["light", "dark"],
    },
  },
  parameters: {
    backgrounds: {
      disable: false,
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    isRandom: true,
    label: "Chipsy",
    cls: "btn",
  },
};

export const Secondary: Story = {
  args: {
    label: "#SecondaryButton",
    cls: "txt",
  },
};

// <button class="chipsy chipsy-sm chipsy-rounded">chips</button>
// <a class="chipsy chipsy-sm chipsy-rounded" href="/">chips</a>
// <div class="chipsy chipsy-sm chipsy-rounded">chips</div>
