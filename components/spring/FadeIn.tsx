"use client"

import React from "react"
import { animated, useSpring } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

interface FadeInProps {
  children: React.ReactNode
}

const FadeIn = ({ children }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  })

  const styles = useSpring({
    opacity: inView ? 1 : 0.5,
    transform: inView ? "translateY(0)" : "translateY(5rem)",
  })

  return (
    <animated.div ref={ref} style={styles}>
      {children}
    </animated.div>
  )
}
export default FadeIn
