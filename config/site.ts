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
          href: "/product/visual",
        },
        {
          title: "网站开发与重构",
          href: "/product/web",
        },
        {
          title: "应用软件",
          href: "/product/application",
        },
        {
          title: "微信小程序",
          href: "/product/weChat",
        },
        {
          title: "移动应用",
          href: "/product/mobile",
        },
        {
          title: "服务器与硬件",
          href: "/product/server",
        },
      ],
    },
    {
      title: "解决方案",
      href: "/plan",
      children: [
        {
          title: "数据存储与计算",
          href: "/plan/dataStorage",
        },
        {
          title: "服务协议",
          href: "/plan/protocol",
        },
        {
          title: "教育/企业/商业网络构建",
          href: "/plan/network",
        },
        {
          title: "大数据分析与处理",
          href: "/plan/bigData",
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
