/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: [".*"],
  serverDependenciesToBundle: [/.*/],
  appDirectory: "src",
  assetsBuildDirectory: "public/build",
  mdx: async () => {
    const [rehypePrism, remarkGfm] = await Promise.all([
      import("rehype-prism-plus").then((m) => m.default),
      import("remark-gfm").then((mod) => mod.default),
    ]);
    return {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    };
  },
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
};
