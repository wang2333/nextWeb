import Image from "next/image"
import { Col, Container, Row, Stack } from "react-bootstrap"

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
  },
  {
    title: "网站开发与重构",
    desc: "应用软件、网站开发、小程序、移动应用",
    img: "/images/002.jpg",
  },
  {
    title: "应用软件",
    desc: "数据采集、数据分析、数据应用",
    img: "/images/003.jpg",
  },
  {
    title: "微信小程序",
    desc: "数据采集，数据分析、数据应用",
    img: "/images/004.jpg",
  },
  {
    title: "移动应用",
    desc: "数据采集、数据分析、数据应用",
    img: "/images/005.jpg",
  },
  {
    title: "服务器硬件",
    desc: "网站设计与移动应用UI设计",
    img: "/images/006.jpg",
  },
]
const listData3 = [
  {
    title: "广告传媒存储与计算",
    desc: "网站设计与移动应用UI设计",
    img: "/images/007.png",
  },
  {
    title: "教育/企业/商业网络构建",
    desc: "应用软件、网站开发、小程序、移动应用",
    img: "/images/008.png",
  },
  {
    title: "机房建设",
    desc: "网站设计与移动应用UI设计",
    img: "/images/009.png",
  },
  {
    title: "大数据分析与应用",
    desc: "应用软件、网站开发小程序、移动应用",
    img: "/images/010.png",
  },
]

export default function IndexPage() {
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

      <Container className="container hidden lg:block">
        <Row className="flex h-32 w-full items-center justify-between">
          {listData.map((item, index) => {
            const isLast = index === listData.length - 1
            let dom = [
              <Col className="flex justify-center" key={index}>
                <Row className="flex items-center">
                  <Col xl="auto">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt=""
                      className="h-12 w-12"
                    />
                  </Col>
                  <Col>
                    <Stack className="mb-2	text-lg font-semibold text-nornam">
                      {item.title}
                    </Stack>
                    <Stack className="text-gray">{item.desc}</Stack>
                  </Col>
                </Row>
              </Col>,
            ]
            if (!isLast) {
              dom.push(
                <Col xs="auto" className="mx-10">
                  <Image
                    src="/images/arrow.jpg"
                    width={50}
                    height={50}
                    className="inline-block h-7 w-12"
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
        className="pb-14"
      >
        <div className="font-600 py-8 text-center text-[2.5rem] md:py-14">
          专业物联网解决方案，倾力满足行业所需
        </div>

        <div className="card container">
          <div className="border-b border-b-slate-400 py-7 text-center text-[1.5rem] font-semibold">
            智慧 + 产品
          </div>
          <Row className="py-16">
            {listData2.map((item, index) => {
              return (
                <Col key={item.title} className="p-0 text-center" xs={6} sm={2}>
                  <div className="relative mx-auto h-36 w-36 text-center">
                    <Image
                      src={item.img}
                      fill={true}
                      alt=""
                      className="inline-block"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className=" mb-2 mt-8 text-lg">{item.title}</div>
                  <div className="text-sm">{item.desc}</div>
                </Col>
              )
            })}
          </Row>
        </div>

        <div className="card container mt-20">
          <div className="border-b border-b-slate-400 py-7 text-center text-[1.5rem] font-semibold">
            智慧 + 解决方案
          </div>
          <Row className="py-16">
            {listData3.map((item, index) => {
              return (
                <Col
                  key={item.title}
                  className="relative mb-10 h-80 p-0 text-center md:mb-0"
                  xs={6}
                  md={3}
                >
                  <Image
                    src={item.img}
                    fill={true}
                    alt=""
                    className="inline-block"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="absolute left-20 top-14 text-lg text-white">
                    {item.title}
                  </div>
                  <div className="absolute left-20 top-24 max-w-[12rem] text-left text-sm text-white">
                    {item.desc}
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}
