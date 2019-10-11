// import { configure } from "@storybook/react";

// // automatically import all files ending in *.stories.js
// configure(require.context("../../app/src", true, /\.stories\.jsx?$/), module);

import { configure } from "@storybook/react";

const req = require.context("../../app/src", true, /\.stories\.jsx$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
