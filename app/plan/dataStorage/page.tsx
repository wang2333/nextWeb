import React from "react"

import Card from "@/components/Card"
import Image from "@/components/Image"

const pageData = [
  {
    title: "广告传媒数据存储与计算",
    img: "/images/banners/015.png",
    desc: [
      "服务器在传媒企业中扮演着不可或缺的角色，如何利用服务器来提高视频存储和剪辑的效率和质量。",
      "一、视频存储的挑战与需求",
      "随着数字技术的迅猛发展，传媒企业产生的大量视频资料需要储存和管理。传统的硬盘存储已经无法满足高清、超高清视频的存储需求，而服务器提供了更可靠、安全、高性能的存储解决方案。通过搭建专业的存储服务器，传媒企业能够高效地管理和访问视频资料，提高工作效率。",
      " ",
      "二、提升视频剪辑效率",
      "视频剪辑是传媒企业中不可或缺的环节。传统的剪辑方式需要将视频素材从硬盘传输到工作站，而这个过程费时且容易出现数据丢失的情况。服务器提供了高速的数据传输通道，使剪辑人员能够直接在服务器上进行剪辑和编辑工作，大大提升了剪辑效率以及团队协作的便捷性。",
      " ",
      "三、保障数据安全",
      "视频资料在传媒企业中属于重要的资产。服务器的存储系统采用了可靠的冗余技术，能够防止因硬盘损坏而导致的数据丢失。此外，服务器还提供了权限管理和备份功能，确保只有授权人员能够访问和修改视频资料，同时防范了数据被误删除或者恶意篡改的风险。",
      " ",
      "四、灵活管理视频资料",
      "传媒企业需要对大量的视频资料进行分类、管理和检索。服务器的高存储容量和智能管理系统为企业提供了便捷的资料管理和检索功能。通过服务器，用户可以根据关键词、时间、所属部门等多个维度快速定位和检索目标视频资料，大大节约了时间和人力成本。",
      " ",
      "五、高效远程协作",
      "传媒企业往往需要在不同地点进行跨团队协作。服务器提供了高速的网络连接，使得团队成员能够在不同地点实时共享和协作视频剪辑工作。无论是远程审片、协同剪辑，还是跨地域团队合作，服务器都可以提供稳定和高效的协作环境。",
      " ",
      "通过利用服务器的高效存储和管理功能，可以提高视频资料的存储效率和剪辑工作的效率，保障数据安全，灵活管理视频资料，以及实现高效的远程协作。在数字化时代，传媒企业将服务器作为重要的基础设施投资之一，必将在市场竞争中占得先机。",
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
