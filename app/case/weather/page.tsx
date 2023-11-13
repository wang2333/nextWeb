import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title: "智慧气象应用APP",
    img: "/images/banners/006.jpg",
    desc: [
      "简要描述：",
      "HN省气象局定制开发的一款APP。定时查询气象云图、雷达云图、实时雨量、温度、风速风向、湿度、可见度、气压、实时图片、实时天气预报等不同维度的信息并以地图和列表联动的方式展现；同时多个不同维度的页面支持循环轮播。",
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
