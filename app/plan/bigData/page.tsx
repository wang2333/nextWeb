import React from "react"

import Card from "@/components/Card"
import Image from "@/components/Image"

const pageData = [
  {
    title: "大数据分析与处理",
    img: "/images/banners/018.png",
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
  {
    title: "实践案例 · 数据治理中台",
    id: "sjzl",
    img: "/images/banners/002.png",
    desc: [
      "简要描述：",
      "基于亿级大数据体量的数据中台，用于接入所有第三方的数据（mysql/oracle/clickhouse/hive/文件等），经过datax中间件和xxl调度进行ETL搜集入kafka、经streaming程序进行消费、groovy脚本对标、数据清洗、打标、服务注册，最终进入HIVE数仓；支持十亿级大表的数据接入、数据去重、保证时效性和稳定性。",
    ],
  },
  {
    title: "实践案例 · 环Y智能感知网系统",
    id: "hyzn",
    img: "/images/banners/003.png",
    desc: [
      "简要描述：",
      "接入客户自由数据和第三方数据，满足XX市对于疫情中高危地区来XX的实时监测，为当地卫健委疫情防控提供数据支撑。",
    ],
  },
  {
    title: "实践案例 · JX水库监测平台",
    id: "jxsk",
    img: "/images/banners/005.png",
    desc: [
      "简要描述：",
      "用来接入RTU设备，完成和设备的通信，采集设备上报数据，统计设备在线状态、雨量、水位（警戒水位）、信号强度、实时图像等不同维度的信息。开发设备远程控制功能，包括远程获取设备参数、配置参数、设备升级、设备重启、水库图像抓拍等功能。",
    ],
  },
  {
    title: "实践案例 · 山东ZB车联网监控平台",
    id: "sdcl",
    img: "/images/banners/007.png",
    desc: [
      "简要描述：",
      "车辆监控集成管理平台。在线离线车辆统计、车辆的实时视频预览、车辆调度、图片抓拍、视频录像、视频下载、车辆轨迹查询、车辆的语音监听、车辆告警配置、告警信息实时推送等。",
    ],
  },
  {
    title: "实践案例 · POI数据中台",
    id: "poi",
    img: "/images/banners/008.png",
    desc: [
      "简要描述：",
      "python抓取工具定向抓取多种POI来源数据，并进行数据过滤，接入，清洗，融合，最终入到成果库（ElasticSearch），接入数据入数仓HIVE,履历数据入Clickhouse，过程计算数据入Hbase,整个数据链路使用flink流式方式多线程并发处理，确保数据入库实时，高效。日数据量级1亿/天，能够为下游应用地图监测，车载导航，POI变更等提供强有力的数据支撑。",
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
