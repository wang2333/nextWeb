"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Col, Container, Row } from "react-bootstrap"

const pageData = [
  {
    title:
      "研发副总裁张伟出席广东省第一节数据应用技术高端研讨会研发副总裁张伟出席广东",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
  {
    title:
      "研发副总裁张伟出席广东省第一节数据应用技术高端研讨会研发副总裁张伟出席广东",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
  {
    title:
      "研发副总裁张伟出席广东省第一节数据应用技术高端研讨会研发副总裁张伟出席广东",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
]
export default function IndexPage() {
  const router = useRouter()
  return (
    <>
      <div className="relative h-52 md:h-[470px]">
        <Image src="/images/beiji4.png" fill alt="" />
        <div className="container ">
          <span className=" absolute left-[19%] top-[30%] text-[1.5rem] tracking-[5px]  text-white">
            <span className="border-b-2 border-y-red-500 pb-5 font-semibold">
              智云
            </span>
            <span>动态</span>
          </span>
        </div>
      </div>

      <div className="container my-5 px-7 text-nornam md:my-10 md:px-0">
        <a className="mr-5 text-xl font-semibold text-primary md:mr-10">
          热门资讯
        </a>
        <a className="mr-5 text-xl md:mr-10">商务洽谈</a>
        <a className="mr-5 text-xl md:mr-10">产品动态</a>
        <a className="mr-5 text-xl md:mr-10">营销资讯</a>
      </div>

      <Container className="container px-7 md:px-0">
        {pageData.map((item) => (
          <Row
            key={item.title}
            className="border-1 m-0 mb-10 cursor-pointer border-dashed border-zinc-400 px-5 py-8"
            onClick={() => router.push("/news/detail")}
          >
            <Col xs={3} md={2} className="relative mr-5 h-40">
              <Image src={item.img} fill alt="" />
            </Col>
            <Col className="flex ">
              <Row className="flex-col">
                <Col className="mb-2 text-lg md:mb-5 md:text-2xl">
                  {item.title}
                </Col>
                <Col>{item.desc}</Col>
                <Col className="inline-block md:hidden ">{item.date}</Col>
              </Row>
            </Col>
            <Col
              md={3}
              className="hidden items-center justify-center  text-lg md:flex"
            >
              {item.date}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}
