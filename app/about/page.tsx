import React from "react"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

import Card from "@/components/Card"

const pageData = [
  {
    title: "智云创想：致力于为中小企业提供信息化与智能化服务的企业！",
    desc: [
      "我们的使命是帮助企业实现数字化转型，提升效率和竞争力。我们的愿景是成为湖北地区最好的软件与互联网企业，为客户提供卓越的解决方案，推动湖北地区的科技创新。",
      " ",
      "我们拥有一支强大的团队，他们具备丰富的技术经验和专业知识。我们的团队成员擅长定制化的软件开发和互联网解决方案，涵盖定制软件开发、移动应用开发、网站设计与开发、数据分析与人工智能以及云计算与大数据等领域。",
      " ",
      "为了更好地满足客户的需求，我们秉承着不断追求创新和创造的理念，致力于为客户提供最佳的解决方案。我们与客户充分沟通和合作，了解他们的业务需求和目标，从而为他们量身定制一套适合的解决方案。我们注重技术的应用和创新，在业务实践中积累了丰富的经验和知识。",
      " ",
      "智云创想（武汉）科技有限公司的名称体现了我们对智能化、创新和创造的追求。其中，“智”代表智能化的概念，它表达了我们在技术应用和解决方案中注重智能化的目标。“云”代表云计算和互联网的概念，体现了我们将利用云技术为客户提供高效的解决方案。“创”代表创新和创造的意义，传递了我们对技术创新和业务创新的追求。“想”代表思考和理性，展示了我们在解决问题和提供解决方案时的思考能力和专业素养。",
      " ",
      "我们以客户的成功为导向，不仅关注解决当前的问题，更注重为客户提供长期的价值和支持。我们始终坚持以客户为中心的原则，并不断努力提升我们的技术和服务水平，以成为客户信赖的合作伙伴。",
      " ",
      "智云创想（武汉）科技有限公司将一如既往地为客户提供最佳的解决方案，推动中小企业的信息化进程，助力企业实现转型升级。我们坚信，通过我们的努力和创造，我们可以为客户带来更多的商业价值和成功。",
    ],
  },
]
const page: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/beiji5.png"
          alt=""
          width={1500}
          height={350}
          className="w-full"
        />
      </div>

      {pageData.map((item, index) => (
        <Card {...item} key={item.title} />
      ))}

      <div className="relative my-10 h-80 md:my-20">
        <Image src="/images/beiji6.png" fill alt="" />
        <Container className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <Row className="w-full justify-center text-2xl font-semibold">
            <Col xs md={2} className=" text-center">
              策略
            </Col>
            <Col xs md={2} className="text-center">
              营销
            </Col>
            <Col xs md={2} className="text-center">
              创意
            </Col>
            <Col xs md={2} className="text-center">
              体验
            </Col>
            <Col xs md={2} className="text-center">
              价值
            </Col>
          </Row>
          <Row className="mt-8 w-full justify-center text-lg">
            <Col xs md={2} className="relative text-center md:-left-10">
              Tactics
            </Col>
            <Col xs md={2} className="relative text-center md:-left-10">
              Marketing
            </Col>
            <Col xs md={2} className="relative text-center md:-left-10">
              Creatives
            </Col>
            <Col xs md={2} className="relative text-center md:-left-10">
              Experience
            </Col>
            <Col xs md={2} className="relative text-center md:-left-10">
              Value
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mb-20">
        <Row className="h-80 justify-center">
          <Col
            xs={4}
            md={3}
            className="border-1 mr-5 flex flex-col items-center justify-center border-dashed border-zinc-400"
          >
            <div className="mb-5 text-[2rem]">智</div>
            <div className="text-gray">智慧、智能</div>
          </Col>
          <Col xs={6} md={4}>
            <Row className="h-40">
              <Col className="border-1 mr-5  flex flex-col items-center justify-center border-dashed border-zinc-400">
                <div className="mb-5 text-[2rem]">云</div>
                <div className="text-gray">IT技术</div>
              </Col>
              <Col className="border-1  flex flex-col items-center justify-center border-dashed border-zinc-400">
                <div className="mb-5 text-[2rem]"> 创</div>
                <div className="text-gray">创造、创新</div>
              </Col>
            </Row>
            <Row className="mt-5 h-40">
              <Col className="border-1  flex flex-col items-center justify-center border-dashed border-zinc-400">
                <div className="mb-5 text-[2rem]">想</div>
                <div className="text-gray">注意、构想</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default page
