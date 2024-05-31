import React from "react"

import Image from "@/components/Image"

interface CardProps {
  title: string
  img?: string
  desc: string[]
  id?: string
}

const Card: React.FC<CardProps> = ({ id, title, img, desc }) => {
  return (
    <div className="container mb-12 mt-16 px-4 md:mt-24 md:px-0" id={id}>
      <span className="inline-block  text-xl font-semibold ">{title}</span>
      <div className="my-5 h-1 w-36 bg-blue-500"></div>
      {img && (
        <div className="relative mb-5 block">
          <Image
            src={img}
            alt=""
            width={1500}
            height={500}
            className="w-full"
          />
        </div>
      )}
      {desc.map((item, index) => (
        <p key={index} className="mt-2  text-lg leading-8 ">
          {item}
        </p>
      ))}
    </div>
  )
}

export default Card
