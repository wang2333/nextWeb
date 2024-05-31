import React from "react"

import Card from "@/components/Card"
import Image from "@/components/Image"

const pageData = [
  {
    title: "微信小程序",
    img: "/images/banners/012.png",
    desc: [
      "微信小程序开发——一项助力企业开启全新营销渠道的技术。",
      " ",
      "微信小程序是一种轻量级应用程序，通过微信平台提供服务和功能。与传统应用相比，微信小程序无需下载、即点即用，用户体验更加便捷。随着微信用户群体的庞大和活跃度的提升，开发微信小程序已成为企业向用户展示产品、提供服务的重要方式。",
      " ",
      "智云创想拥有一支技术经验丰富的开发团队，擅长微信小程序的设计与开发。我们将根据您的业务需求，开发出符合品牌形象和用户体验的微信小程序。无论是电商平台、预约服务、社交互动还是行业垂直应用，我们都能为您量身打造专属的解决方案。",
      " ",
      "通过微信小程序，您可以实现以下目标：",
      " ",
      "增加用户曝光率：微信平台庞大的用户群体为您的品牌带来更多曝光机会，有效提升知名度和用户粘性；",
      "提升用户体验：微信小程序的简洁、高效特性，让用户更轻松地获取所需信息、进行交互和购买；",
      "扩大用户群体：微信小程序支持分享转发功能，帮助您快速扩大用户群体，实现快速增长。",
      "智云创想的微信小程序开发团队将为您提供全方位的服务，包括需求调研、原型设计、开发部署和后期维护。我们注重每一个细节，确保您的微信小程序在功能和外观上都能满足用户需求。同时，我们也提供数据分析和优化服务，帮助您不断提升微信小程序的效果和用户满意度。",
    ],
  },
  {
    title: "实践案例 · 轻松买小程序",
    id: "qsm",
    img: "/images/banners/009.png",
    desc: [
      "简要描述：",
      "定制开发微信在线小程序，为用户提供智能推荐，健康标签，配送追踪等贴心的选菜/配送服务，让客户足不出户，买到新鲜时令的心仪菜品。",
      "详细描述：",
      "越来越多的人注重健康饮食，选择自家烹饪。为了满足用户的需求，买菜配送小程序成为了一个理想的选择，本应用集成到微信小程序，用户无需下载多余应用。",
      "本应用的优势：",
      "a. 方便快捷：可以随时随地进行食材选购，无需外出逛市场、浪费时间排队。用户可以通过小程序实现在线选购，并在指定时间内将新鲜食材配送到家。",
      "b. 多样选择：提供丰富多样的食材选择，包括有机蔬菜、新鲜水果、海鲜肉类等。用户可以根据个人喜好和需求，浏览并选择合适的食材，满足不同口味的需求。",
      "c. 新鲜保证：与当地农户、农场或超市合作，直接从源头采购食材。用户可以获得新鲜、优质的食材，避免了中间环节可能引起的食品变质和质量问题。",
      "d. 购物便捷：提供智能搜索功能，帮助用户快速找到所需食材。同时，通过购物车功能，用户可以轻松管理和结算选购的食材，省去排队结账的繁琐步骤",
    ],
  },
]
const page: React.FC = () => {
  return (
    <>
      <div className="relative h-52 md:h-[470px]">
        <Image src="/images/beiji4.png" fill alt="" />
      </div>

      {pageData.map((item, index) => (
        <Card {...item} key={item.title} id={item.id} />
      ))}
    </>
  )
}
export default page
