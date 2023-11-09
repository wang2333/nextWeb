import React from "react"
import Image from "next/image"

import Card from "@/components/Card"

const pageData = [
  {
    title: "大数据分析与处理",
    img: "/images/banners/018.jpg",
    desc: [
      "随着大数据时代的到来，企业需要处理的海量数据不断增长，这对数据分析平台提出了更高的要求。数据系统集成作为大数据分析平台中的重要一环，能够帮助企业更加高效地实现数据采集、清洗和分析，从而更好地挖掘数据价值。",
      " ",
      "数据采集：系统集成能够实现对企业内部和外部数据的全面采集，包括结构化、半结构化和非结构化数据。通过数据采集，能够为后续的数据分析提供全面、准确的数据源。",
      " ",
      "数据清洗：在数据采集过程中，可能会存在重复数据、缺失数据、异常数据等问题。系统集成能够对数据进行清洗，去除无效数据，补充缺失数据，修正异常数据，确保数据分析结果的准确性和可靠性。",
      " ",
      "数据分析：系统集成能够将经过清洗后的数据进行分析，提供多种数据分析方法，如描述性分析、预测性分析和因果性分析等。这能够帮助企业更好地了解客户需求、市场趋势和业务运营情况，为企业决策提供有力支持",
      "数据应用：对分析好的数据集，可以进行各种数据的应用定制，进行多维度，高效率，多元化的数据铺排",
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
