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
      children: [
        {
          title: "产品设计",
          href: "/product/design",
        },
        {
          title: "产品开发",
          href: "/product/develop",
        },
      ],
    },
    {
      title: "解决方案",
      href: "/plan",
      children: [
        {
          title: "智能制造",
          href: "/plan",
        },
        {
          title: "智能医疗",
          href: "/plan",
        },
      ],
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
