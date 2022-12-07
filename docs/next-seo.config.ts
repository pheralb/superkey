export default {
  title: "A stylized command menu for React",
  titleTemplate: "%s - Superkey",
  description: "A stylized command menu for React",
  defaultTitle: "Superkey",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/img/logo.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/icon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "preload",
      href: "/fonts/Inter-roman-latin.var.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/CascadiaCode.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    site_name: "Superkey",
    url: "https://superkey.vercel.app/",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/img/banner.png",
        width: 1920,
        height: 1080,
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@pheralb_",
    site: "@pheralb_",
    cardType: "summary_large_image",
  },
};
