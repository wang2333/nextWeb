import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap"

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
export default function IndexPage() {
  return (
    <>
      <div className="">
        <Image
          src="/images/banner.jpg"
          className="h-130 w-full object-fill"
          alt=""
        />
      </div>

      <Container className="container hidden lg:block">
        <Row className=" flex h-32 w-full items-center justify-between">
          {listData.map((item, index) => {
            const isLast = index === listData.length - 1
            let dom = [
              <Col className="flex justify-center" key={index}>
                <Row className="flex items-center">
                  <Col xl="auto">
                    <Image src={item.img} alt="" className="h-12 w-12" />
                  </Col>
                  <Col>
                    <Stack className="mb-2 text-lg font-bold text-nornam">
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

      <Container className="block sm:hidden">
        <Row className="flex h-32 w-full items-center justify-between">
          {listData.map((item, index) => {
            const isLast = index === listData.length - 1
            let dom = [
              <Col key={index}>
                <Stack className="mb-2 flex items-center  text-lg">
                  <Image src={item.img} alt="" className="h-10 w-10" />
                </Stack>
                <Stack className="mb-2 flex items-center text-base font-bold ">
                  {item.title}
                </Stack>
              </Col>,
            ]
            if (!isLast) {
              dom.push(
                <Col xs="auto">
                  <Image
                    src="/images/arrow.jpg"
                    className="inline-block h-7 w-7"
                    alt=""
                  />
                </Col>
              )
            }
            return dom
          })}
        </Row>
      </Container>
    </>
  )
}
