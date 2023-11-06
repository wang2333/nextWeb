export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "智云创想",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "产品开发",
      href: "/product",
      children: ["1"],
    },
    {
      title: "解决方案",
      href: "/plan",
      children: ["1"],
    },
    {
      title: "智云动态",
      href: "/news",
    },
    {
      title: "关于我们",
      href: "/about",
    },
  ],
}
