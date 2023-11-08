import React from "react"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

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
    title: "智云动态",
    childRen: ["2023互联网大会", "大数据与AI智能", "参加计算机算法活动"],
  },
  {
    title: "联系洽谈",
    childRen: ["+15926269363"],
  },
]
function Footer() {
  return (
    <div className=" bg-black1 ">
      <Container className="container pt-16 ">
        <Row className="m-0">
          <Col md={2} className="left hidden pr-20 md:inline-block">
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
          </Col>

          <Col
            xs={12}
            md={8}
            className="mid justify-between border-l border-l-slate-800 pl-0 text-gray md:pl-20"
          >
            <Row className="m-0">
              {footData.map((item) => {
                return (
                  <Col className="item " key={item.title}>
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
                  </Col>
                )
              })}
            </Row>
          </Col>

          <Col md={2} className="right hidden md:inline-block">
            <div className="mb-3 text-gray">智云创想公众号</div>
            <span className="inline-block h-28 w-28 bg-white"></span>
          </Col>
        </Row>
      </Container>
      <div className="container mt-5 border-t border-t-slate-800 pb-10 pt-3 text-right text-gray">
        Copyright@2022-2023 智云创想 版权所有
      </div>
    </div>
  )
}

export default Footer
