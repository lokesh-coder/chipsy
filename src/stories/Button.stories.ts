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
    darkBg: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['simple', 'counter', 'hashtag', 'with-icon'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
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