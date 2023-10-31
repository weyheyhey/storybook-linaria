import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal(config) {
    config.module?.rules?.push({
      test: /\.(ts|tsx|js|mjs|jsx)$/,
      use: [
        {
          loader: require.resolve("@linaria/webpack-loader"),
          options: {
            extension: ".linaria.module.css",
            sourceMap: process.env.NODE_ENV !== "production",
            displayName: process.env.NODE_ENV !== "production",
            babelOptions: {
              presets: ["@babel/preset-react", "@linaria"],
            },
          },
        },
      ],
    });
    return config;
  },
};
export default config;
