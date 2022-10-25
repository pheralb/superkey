const withTM = require("next-transpile-modules")(["superkey"]);

module.exports = withTM({
  reactStrictMode: true,
});
