import React from "react"
import Image from "next/image"

import { Icons } from "@/components/icons"

const footData = [
  {
    title: "产品开发",
    childRen: [
      "视觉呈现",
      "网站开发与重构",
      "应用软件",
      "微信小程序",
      "移动应用",
      "服务器与硬件",
    ],
  },
  {
    title: "解决方案",
    childRen: [
      "数据储存与计算",
      "服务协议",
      "教育/企业/商业网络构建",
      "大数据分析与处理",
    ],
  },
  {
    title: "联系洽谈",
    childRen: ["+15926269363"],
  },
  {
    title: "智云动态",
    childRen: ["2023互联网大会", "大数据与AI智能", "参加计算机算法活动"],
  },
]
function Footer() {
  return (
    <div className="hidden bg-black1 lg:block">
      <div className="container flex pt-16 ">
        <div className="left mr-20 w-44">
          <Image
            src="/images/logo2.png"
            alt=""
            className="mb-5 w-full"
            width={175}
            height={48}
          />
          <div className="tel flex items-center justify-center rounded bg-primary  p-2 text-xs text-white">
            <Icons.Phone className="mr-2"></Icons.Phone>
            4001-100-866 转1
          </div>
        </div>
        <div className="mid flex flex-1 justify-between border-l border-l-slate-800 pl-20 text-gray">
          {footData.map((item) => {
            return (
              <div className="item" key={item.title}>
                <div className="title mb-3 font-semibold text-white">
                  {item.title}
                </div>
                <div className="childRen">
                  {item.childRen.map((child) => {
                    return (
                      <div className="child mb-2" key={child}>
                        {child}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="right ml-20 ">
          <div className="mb-3 text-gray">智云创想公众号</div>
          <span className="inline-block h-28 w-28 bg-white"></span>
        </div>
      </div>
      <div className="container mt-5 border-t border-t-slate-800 pb-10 pt-3 text-right text-gray">
        Copyright@2022-2023 智云创想 版权所有
      </div>
    </div>
  )
}

export default Footer
