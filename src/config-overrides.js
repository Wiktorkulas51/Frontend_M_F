const { injectBublePlugin } = require("react-app-rewired");

const rootImportConfig = [
  "root import",
  {
    rootPathPrefix: "",
    rootPathSuffix: "src",
  },
];

module.exports = (config) => injectBublePlugin(rootImportConfig, config);
