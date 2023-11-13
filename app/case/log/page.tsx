import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title: "日志运维移动端",
    img: "/images/banners/004.jpg",
    desc: [
      "简要描述：",
      "基于企业微信的二次企业应用开发，用于满足公司8个部门500多名员工日报提交和周报提交，以及实时的项目跟踪和工时统计等（同时满足PC和手机端），部门间数据相互独立不可见。",
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
