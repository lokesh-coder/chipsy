import type { Preview } from "@storybook/html";
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED, FORCE_RE_RENDER } from "@storybook/core-events";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      backgrounds: {
        disable: true,
      },
    },
  },
};

let channel = addons.getChannel()



const storyListener = (args) => {
  if (args.args.colorTheme) {
    let colorTheme = args.args.colorTheme;
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: colorTheme,
        backgrounds: colorTheme === "dark" ? { name: "dark", value: "#333333" } : { name: "light", value: "#F1F1F1" }
      }
    });
    channel.emit(FORCE_RE_RENDER);
  }
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();

export default preview;
