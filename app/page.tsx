"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Col, Container, Row, Stack } from "react-bootstrap"

import FadeIn from "@/components/spring/FadeIn"

const listData = [
  {
    title: "定制方案",
    desc: "项目组充分探讨，提出解决方案， 再与您确定方案的适用性。",
    img: "/images/icon1.jpg",
  },
  {
    title: "开发调式",
    desc: "开发途中定时与您反馈进展和效果，严格过程管理。",
    img: "/images/icon2.jpg",
  },
  {
    title: "验收维护",
    desc: "培训使用方法，365天免费维护终生技术支持。",
    img: "/images/icon3.jpg",
  },
]
const listData2 = [
  {
    title: "视觉呈现",
    desc: "网站设计与移动应用UI设计",
    img: "/images/001.jpg",
    herf: "/product/visual",
  },
  {
    title: "网站开发与重构",
    desc: "应用软件、网站开发、小程序、移动应用",
    img: "/images/002.jpg",
    herf: "/product/web",
  },
  {
    title: "应用软件",
    desc: "数据采集、数据分析、数据应用",
    img: "/images/003.jpg",
    herf: "/product/application",
  },
  {
    title: "微信小程序",
    desc: "数据采集，数据分析、数据应用",
    img: "/images/004.jpg",
    herf: "/product/weChat",
  },
  {
    title: "移动应用",
    desc: "数据采集、数据分析、数据应用",
    img: "/images/005.jpg",
    herf: "/product/mobile",
  },
  {
    title: "服务器硬件",
    desc: "网站设计与移动应用UI设计",
    img: "/images/006.jpg",
    herf: "/product/server",
  },
]
const listData3 = [
  {
    title: "广告传媒存储与计算",
    desc: "网站设计与移动应用UI设计",
    img: "/images/007.png",
    href: "/plan/dataStorage",
  },
  {
    title: "机房建设",
    desc: "网站设计与移动应用UI设计",
    img: "/images/009.png",
    href: "/plan/protocol",
  },
  {
    title: "教育/企业/商业网络构建",
    desc: "应用软件、网站开发、小程序、移动应用",
    img: "/images/008.png",
    href: "/plan/network",
  },

  {
    title: "大数据分析与处理",
    desc: "应用软件、网站开发小程序、移动应用",
    img: "/images/010.png",
    href: "/plan/bigData",
  },
]
const listData4 = [
  {
    title: "数据治理中台",
    desc: "网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
    href: "/case/dataGovernance",
  },
  {
    title: "日志运维移动端",
    desc: "网站设计与移动应用UI设计",
    img: "/images/banners/004.jpg",
    href: "/case/log",
  },
  {
    title: "HN智慧气象系统",
    desc: "应用软件、网站开发、小程序、移动应用",
    img: "/images/banners/006.jpg",
    href: "/case/weather",
  },

  {
    title: "轻松买小程序",
    desc: "应用软件、网站开发小程序、移动应用",
    img: "/images/banners/009.jpg",
    href: "/case/buy",
  },
]
const listData5 = [
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
  {
    title: "湖北经视文化传播有限公司",
    desc: "网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计网站设计与移动应用UI设计",
    img: "/images/banners/002.jpg",
  },
]
const listData6 = [
  {
    img: "/images/icon5.png",
    title: "热情耐心",
    desc: "我们相信对客户热情耐心是最好的销售法则。",
  },
  {
    img: "/images/icon6.png",
    title: "专业专注",
    desc: "把每一件产品当作我们的代表作，精雕细琢。",
  },
  {
    img: "/images/icon7.png",
    title: "技术支持",
    desc: "365天免费维护，技术是起点，满意是终点。",
  },
]

export default function IndexPage() {
  const router = useRouter()
  return (
    <>
      <div className="mx-auto ">
        <Image
          src="/images/banner.jpg"
          className="h-90 w-full object-fill"
          alt=""
          width={1920}
          height={500}
        />
      </div>

      <Container className="container">
        <Row className=" m-0 h-32 w-full">
          {listData.map((item, index) => {
            const isLast = index === listData.length - 1
            let dom = [
              <Col className="flex justify-center" key={index}>
                <Row className="content-evenly items-center">
                  <Col xl="auto" className=" flex justify-center">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt=""
                      className="h-12 w-12"
                    />
                  </Col>
                  <Col>
                    <Stack className="mb-0 text-center text-lg font-semibold text-nornam md:mb-2 md:text-left">
                      {item.title}
                    </Stack>
                    <Stack className="hidden text-gray md:inline-block">
                      {item.desc}
                    </Stack>
                  </Col>
                </Row>
              </Col>,
            ]
            if (!isLast) {
              dom.push(
                <Col xs="auto" className="flex items-center p-0 md:mx-5">
                  <Image
                    src="/images/arrow.jpg"
                    width={50}
                    height={50}
                    className="inline-block w-8 md:w-12"
                    alt=""
                  />
                </Col>
              )
            }
            return dom
          })}
        </Row>
      </Container>

      <div
        style={{
          backgroundColor: "#f2f6fa",
          backgroundImage: "url(/images/beiji.png)",
          backgroundSize: "100% 100%",
        }}
        className=" px-7 pb-14"
      >
        <div className="font-600 hidden py-14 text-center text-[2.5rem] md:block">
          专业物联网解决方案，倾力满足行业所需
        </div>
        <div className="font-600 py-6 text-center text-2xl  md:hidden">
          <p className="mb-2 ">专业物联网解决方案</p>
          <p>倾力满足行业所需</p>
        </div>

        <div className="card container">
          <div className="border-b border-b-slate-400 py-5 text-center text-[1.5rem] font-semibold">
            智慧 + 产品
          </div>
          <Row className="m-0 pb-6 pt-12 md:pb-12">
            {listData2.map((item, index) => {
              return (
                <Col
                  key={item.title}
                  className="cursor-pointer p-0 text-center"
                  xs={4}
                  sm={2}
                  onClick={() => router.push(item.herf)}
                >
                  <div className="relative mx-auto h-36 w-36 text-center">
                    <Image
                      src={item.img}
                      fill={true}
                      alt=""
                      className="inline-block"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className=" my-4 text-center text-lg">{item.title}</div>
                  <div className="text-md hidden text-center md:inline-block">
                    {item.desc}
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>

        <div className="card container mt-20">
          <div className="border-b border-b-slate-400 py-5 text-center text-[1.5rem] font-semibold">
            智慧 + 解决方案
          </div>
          <Row className="m-0 pb-6 pt-12">
            {listData3.map((item, index) => {
              return (
                <Col
                  key={item.title}
                  className="relative mb-5 cursor-pointer p-0 text-center"
                  xs={6}
                  md={3}
                  onClick={() => router.push(item.href)}
                >
                  <FadeIn>
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt=""
                      className="inline-block w-[85%] "
                    />
                    <div className="absolute left-[10%] top-[10%] w-[80%] text-left text-lg text-white md:left-[15%]">
                      {item.title}
                    </div>
                    <div className="text-md absolute left-[10%] top-[20%] hidden max-w-[15rem] text-left text-white md:left-[15%] md:inline-block">
                      {item.desc}
                    </div>
                  </FadeIn>
                </Col>
              )
            })}
          </Row>
        </div>

        <div className="card container  mt-20">
          <div className="border-b border-b-slate-400 py-5 text-center text-[1.5rem] font-semibold">
            实践案例
          </div>
          <Row className="m-0 bg-zinc-100 py-6 md:pb-6">
            {listData4.map((item, index) => {
              return (
                <Col
                  key={item.title}
                  className=" cursor-pointer rounded-md  text-center "
                  xs={6}
                  sm={3}
                  onClick={() => router.push(item.href)}
                >
                  <FadeIn className="mb-0 rounded-md bg-white p-4">
                    <Image
                      src={item.img}
                      width={300}
                      height={200}
                      alt=""
                      className="inline-block h-full w-full"
                    />
                    <div className=" my-4 text-center text-lg">
                      {item.title}
                    </div>
                    {/* <div className="text-md hidden text-center md:inline-block">
                      {item.desc}
                    </div> */}
                  </FadeIn>
                </Col>
              )
            })}
          </Row>
        </div>

        <div className="card container  mt-20">
          <div className="border-b border-b-slate-400 py-5 text-center text-[1.5rem] font-semibold">
            我们的合作伙伴
          </div>
          <Row className="m-0 bg-zinc-100 py-6 md:pb-6">
            {listData5.map((item, index) => {
              return (
                <Col
                  xs={6}
                  sm={4}
                  key={item.title}
                  className="m-0 cursor-pointer rounded-md  text-center "
                  onClick={() => router.push(item.href)}
                >
                  <FadeIn className="mb-4 rounded-md bg-white p-4 ">
                    <Image
                      src={item.img}
                      width={300}
                      height={200}
                      alt=""
                      className="inline-block h-full w-full"
                    />
                    <div className=" my-4 text-center text-lg">
                      {item.title}
                    </div>
                    <div className="hidden text-left text-sm md:inline-block">
                      {item.desc}
                    </div>
                  </FadeIn>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f2f6fa",
          backgroundImage: "url(/images/beiji2.png)",
          backgroundSize: "100% 100%",
        }}
      >
        <Container className="container py-8 md:py-32">
          <Row>
            {listData6.map((item) => {
              return (
                <Col
                  key={item.title}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <FadeIn>
                    <Image
                      src={item.img}
                      width={80}
                      height={100}
                      alt=""
                      className="inline-block w-12 md:w-20"
                    />
                    <div className="mb-0 mt-6 text-center text-xl font-semibold md:mb-6">
                      {item.title}
                    </div>
                    <div className="hidden w-[50%] text-center text-lg leading-8 md:inline-block">
                      {item.desc}
                    </div>
                  </FadeIn>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="relative h-20 md:h-32">
        <Image src="/images/beiji3.png" fill alt=""></Image>
      </div>
    </>
  )
}
