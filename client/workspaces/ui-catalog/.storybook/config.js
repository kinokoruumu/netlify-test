import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(require.context("../../app/src", true, /\.stories\.js$/), module);
