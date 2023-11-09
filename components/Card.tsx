import React from "react"
import Image from "next/image"

interface CardProps {
  title: string
  img?: string
  desc: string[]
}

const Card: React.FC<CardProps> = ({ title, img, desc }) => {
  return (
    <div className="container mb-12 mt-16 md:mt-24">
      <span className="inline-block  text-xl font-semibold ">{title}</span>
      <div className="my-5 h-1 w-36 bg-blue-500"></div>
      {img && (
        <div className="relative mb-5 block h-52 md:h-130">
          <Image src={img} fill alt="" />
        </div>
      )}
      {desc.map((item, index) => (
        <p key={index} className="mt-2 px-3 text-lg leading-8 md:p-0">
          {item}
        </p>
      ))}
    </div>
  )
}

export default Card
