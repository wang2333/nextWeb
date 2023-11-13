import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title: "数据治理中台",
    img: "/images/banners/002.jpg",
    desc: [
      "简要描述：",
      "基于亿级大数据体量的数据中台，用于接入所有第三方的数据（mysql/oracle/clickhouse/hive/文件等），经过datax中间件和xxl调度进行ETL搜集入kafka、经streaming程序进行消费、groovy脚本对标、数据清洗、打标、服务注册，最终进入HIVE数仓；支持十亿级大表的数据接入、数据去重、保证时效性和稳定性。",
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
