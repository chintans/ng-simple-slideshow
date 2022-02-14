/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/6.3/config/configuration-file.html
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
  },
});
require("./karma.conf.ts");
