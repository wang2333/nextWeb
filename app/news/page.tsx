"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

import Image from "@/components/Image"

const pageData = [
  {
    title: "研发副总裁张伟出席广东省第一节数据应用 技术高端研讨会",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
  {
    title: "研发副总裁张伟出席广东省第一节数据应用 技术高端研讨会",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
  {
    title: "研发副总裁张伟出席广东省第一节数据应用 技术高端研讨会",
    desc: "2023年10月26日，广东省第一节大数据应用技术高端研讨会在广州花园酒店三楼绣球厅开展...",
    date: "2023-11-01",
    img: "/images/010.png",
  },
]
export default function IndexPage() {
  const [tabs, setTabs] = useState([
    {
      title: "热门资讯",
      active: true,
    },
    {
      title: "商务洽谈",
      active: false,
    },
    {
      title: "产品动态",
      active: false,
    },
    {
      title: "营销资讯",
      active: false,
    },
  ])

  const handleChange = (index: number) => {
    const newTabs = tabs.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          active: true,
        }
      } else {
        return {
          ...item,
          active: false,
        }
      }
    })
    setTabs(newTabs)
  }
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
        {tabs.map((item, index) => (
          <a
            key={item.title}
            className={`mr-5 cursor-pointer text-xl  md:mr-10 ${
              item.active && "font-semibold text-primary"
            }`}
            onClick={() => handleChange(index)}
          >
            {item.title}
          </a>
        ))}
      </div>

      <Container className="container px-7 md:px-0">
        {pageData.map((item) => (
          <Link href={"/news/detail"} key={item.title}>
            <Row className="border-1 m-0 mb-10 cursor-pointer border-dashed border-zinc-400 px-5 py-8">
              <Col xs={3} md={3} className="relative mr-5 h-40">
                <Image src={item.img} fill alt="" />
              </Col>
              <Col className="flex ">
                <Row className="flex-col justify-between">
                  <div className="text-md md:text-lg">{item.title}</div>
                  <div className="hidden text-sm text-gray md:inline-block">
                    {item.desc}
                  </div>
                  <div className="text-md inline-block md:hidden">
                    {item.date}
                  </div>
                </Row>
              </Col>
              <Col
                md={3}
                className="hidden items-start justify-center  text-lg md:flex"
              >
                {item.date}
              </Col>
            </Row>
          </Link>
        ))}
      </Container>
    </>
  )
}
