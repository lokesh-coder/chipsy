import type { StorybookConfig } from "@storybook/html-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { chipsy: '../../../packages/core/src', "quick-prng": '../../../packages/quick-prng/src' },
      },
    })
  }
};
export default config;
