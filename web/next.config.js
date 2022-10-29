const withTM = require("next-transpile-modules")(["superkey"], {
  resolveSymlinks: false,
});

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
