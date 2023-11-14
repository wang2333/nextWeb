import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title:
      "研发副总裁张伟出席广东省第一节数据应用技术高端研讨会研发副总裁张伟出席广东",
    desc: [
      "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
      "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
      "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
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
        <Card {...item} key={item.title} />
      ))}
    </>
  )
}
export default page
