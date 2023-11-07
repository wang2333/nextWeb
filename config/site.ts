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
          title: "视觉呈现",
          href: "/product/1",
        },
        {
          title: "网站开发与重构",
          href: "/product/2",
        },
        {
          title: "应用软件",
          href: "/product/3",
        },
        {
          title: "微信小程序",
          href: "/product/4",
        },
        {
          title: "移动应用",
          href: "/product/5",
        },
        {
          title: "服务器与硬件",
          href: "/product/6",
        },
      ],
    },
    {
      title: "解决方案",
      href: "/plan",
      children: [
        {
          title: "数据存储与计算",
          href: "/plan/1",
        },
        {
          title: "服务协议",
          href: "/plan/2",
        },
        {
          title: "教育/企业/商业网络构建",
          href: "/plan/3",
        },
        {
          title: "大数据分析与处理",
          href: "/plan/4",
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
