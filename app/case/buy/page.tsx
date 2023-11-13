import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title: "轻松买小程序",
    img: "/images/banners/009.jpg",
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
      <div className="relative h-52 md:h-130">
        <Image src="/images/beiji4.png" fill alt="" />
      </div>

      {pageData.map((item, index) => (
        <Card {...item} key={item.title} />
      ))}
    </>
  )
}
export default page
