import type { StoryObj, Meta } from '@storybook/html';
import type { ButtonProps } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'DOCUMENTATION/Chipsy ',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    isRandom: { control: 'boolean' },
    colorTheme: {
      control: {
        type: "inline-radio",
      },
      options: ["light", "dark"]
    }
  },
  parameters: {
    backgrounds: {
      disable: false
    }
  }
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    isRandom: true,
    label: 'Chipsy',
    cls: 'btn'
  },
};

export const Secondary: Story = {
  args: {
    label: '#SecondaryButton',
    cls: 'txt'
  },
};



// <button class="chipsy chipsy-sm chipsy-rounded">chips</button>
// <a class="chipsy chipsy-sm chipsy-rounded" href="/">chips</a>
// <div class="chipsy chipsy-sm chipsy-rounded">chips</div>