import React from "react"

import { Icons } from "@/components/icons"

import Style from "./layout.module.scss"

function Footer() {
  return (
    <div className={Style.Footer}>
      <div className="container py-14">
        <div className="left mr-20 w-44">
          <img src="/images/logo2.png" alt="" className="mb-3 w-full" />
          <div className="tel flex items-center justify-center rounded bg-primary  p-2 text-xs text-white">
            <Icons.Phone className="mr-2"></Icons.Phone>
            4001-100-866 转1
          </div>
        </div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Footer
